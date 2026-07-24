# scripts/batch-translate.ps1

param(
    [string]$Roadmap = "",
    [string]$Directory = "",
    [int]$Limit = 0,
    [switch]$Resume,
    [switch]$Force,
    [switch]$DryRun,
    [string]$Engine = "dlx"
)

$ErrorActionPreference = "Continue"

$StateDir = ".translation-state"
$ManifestPath = Join-Path $StateDir "manifest.jsonl"
$CompletedPath = Join-Path $StateDir "completed.jsonl"
$FailedPath = Join-Path $StateDir "failed.jsonl"

if (-not (Test-Path $ManifestPath)) {
    Write-Host "Manifest not found. Running inventory-markdown.ps1..." -ForegroundColor Yellow
    powershell -ExecutionPolicy Bypass -File scripts/inventory-markdown.ps1
}

$Lines = Get-Content $ManifestPath
$Entries = $Lines | ForEach-Object { $_ | ConvertFrom-Json }

if ($Roadmap) {
    $Entries = $Entries | Where-Object { $_.source -match "^src/data/roadmaps/$Roadmap/" }
}

if ($Directory) {
    $DirectoryNormalized = $Directory -replace '\\', '/'
    $Entries = $Entries | Where-Object { $_.source -like "$DirectoryNormalized*" }
}

if ($Resume) {
    # Filter out already completed files
    $CompletedSources = @{}
    if (Test-Path $CompletedPath) {
        Get-Content $CompletedPath | ForEach-Object {
            $item = $_ | ConvertFrom-Json
            $CompletedSources[$item.source] = $true
        }
    }
    $Entries = $Entries | Where-Object { -not $CompletedSources.ContainsKey($_.source) }
}

$ProcessedCount = 0

foreach ($Entry in $Entries) {
    if ($Limit -gt 0 -and $ProcessedCount -ge $Limit) {
        Write-Host "Limit of $Limit reached. Stopping." -ForegroundColor Yellow
        break
    }

    Write-Host "Processing: $($Entry.source)"
    
    # Check if target exists and if we should force
    if ((Test-Path $Entry.target) -and -not $Force) {
        $SourceHash = (Get-FileHash $Entry.source -Algorithm SHA256).Hash.ToLower()
        if ("sha256:$SourceHash" -eq $Entry.sourceHash) {
            Write-Host "  -> Skipping (already translated)." -ForegroundColor Yellow
            continue
        } else {
            Write-Host "  -> Source hash changed. Retranslating..." -ForegroundColor Cyan
        }
    }

    if ($DryRun) {
        Write-Host "  -> [DRY RUN] Would translate $($Entry.source) using $Engine"
        $ProcessedCount++
        continue
    }

    $Entry | Add-Member -NotePropertyName "attempts" -NotePropertyValue ($Entry.attempts + 1) -Force
    $Entry | Add-Member -NotePropertyName "startedAt" -NotePropertyValue (Get-Date -Format "o") -Force
    $Entry | Add-Member -NotePropertyName "engine" -NotePropertyValue $Engine -Force

    try {
        # Call the token-safe DLX translation wrapper
        node node_modules/tsx/dist/cli.mjs scripts/protect-translate.ts "$($Entry.source)" $Engine
        
        if ($LASTEXITCODE -eq 0) {
            $Entry | Add-Member -NotePropertyName "status" -NotePropertyValue "completed" -Force
            $Entry | Add-Member -NotePropertyName "finishedAt" -NotePropertyValue (Get-Date -Format "o") -Force
            $Entry | ConvertTo-Json -Compress | Add-Content $CompletedPath
            Write-Host "  -> Success." -ForegroundColor Green
        } else {
            Write-Host "  -> Failed with exit code $LASTEXITCODE" -ForegroundColor Red
            $Entry | Add-Member -NotePropertyName "status" -NotePropertyValue "failed" -Force
            $Entry | Add-Member -NotePropertyName "finishedAt" -NotePropertyValue (Get-Date -Format "o") -Force
            $Entry | ConvertTo-Json -Compress | Add-Content $FailedPath
        }
    } catch {
        Write-Host "  -> Failed: $_" -ForegroundColor Red
        $Entry | Add-Member -NotePropertyName "status" -NotePropertyValue "failed" -Force
        $Entry | Add-Member -NotePropertyName "error" -NotePropertyValue $_.ToString() -Force
        $Entry | Add-Member -NotePropertyName "finishedAt" -NotePropertyValue (Get-Date -Format "o") -Force
        $Entry | ConvertTo-Json -Compress | Add-Content $FailedPath
    }

    $ProcessedCount++
    Start-Sleep -Seconds 1
}

Write-Host "Batch run complete. Processed $ProcessedCount files." -ForegroundColor Green
