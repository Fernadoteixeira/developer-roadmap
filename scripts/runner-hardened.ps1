# scripts/runner-hardened.ps1
# Persistent and hardened runner for developer-roadmap translation state

param(
    [string]$Engine = "gtx",
    [int]$DelayBetweenBatches = 5
)

$ErrorActionPreference = "Continue"

$StateDir = ".translation-state"
$ManifestPath = Join-Path $StateDir "manifest.jsonl"
$CompletedPath = Join-Path $StateDir "completed.jsonl"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " Iniciando Runner Hardened & Persistido de Tradução ($Engine)" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

$iteration = 0

while ($true) {
    $iteration++
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

    # Calculate current state metrics
    if (Test-Path $ManifestPath) {
        $manifestLines = (Get-Content $ManifestPath | Where-Object { $_ -match '\S' }).Count
        
        $completedSet = @{}
        if (Test-Path $CompletedPath) {
            Get-Content $CompletedPath | Where-Object { $_ -match '\S' } | ForEach-Object {
                try {
                    $obj = $_ | ConvertFrom-Json
                    if ($obj.source) { $completedSet[$obj.source] = $true }
                } catch {}
            }
        }
        
        $completedCount = $completedSet.Count
        $remaining = $manifestLines - $completedCount
        $pct = if ($manifestLines -gt 0) { [math]::Round(($completedCount / $manifestLines) * 100, 2) } else { 0 }

        Write-Host "[$timestamp] Iteração #$iteration | Total: $manifestLines | Concluídos: $completedCount | Restantes: $remaining ($pct%)" -ForegroundColor Yellow

        if ($remaining -le 0) {
            Write-Host "[$timestamp] 🎉 Todas as $manifestLines traduções do manifest foram concluídas!" -ForegroundColor Green
            break
        }
    }

    try {
        # Execute batch translate in resume mode
        powershell -ExecutionPolicy Bypass -File scripts/batch-translate.ps1 -Resume -Engine $Engine
    } catch {
        Write-Host "[$timestamp] Exceção capturada no loop de tradução: $_" -ForegroundColor Red
    }

    Write-Host "[$timestamp] Pausa de $DelayBetweenBatches segundos antes do próximo ciclo..." -ForegroundColor Gray
    Start-Sleep -Seconds $DelayBetweenBatches
}

Write-Host "Runner encerrado." -ForegroundColor Green
