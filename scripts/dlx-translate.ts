export interface DLXTranslateOptions {
  endpoint?: string;
  targetLang?: string;
  maxRetries?: number;
  retryDelayMs?: number;
}

export async function translateTextWithDLX(
  text: string,
  options: DLXTranslateOptions = {},
): Promise<string> {
  const endpoint = options.endpoint || 'http://localhost:1188/translate';
  const targetLang = options.targetLang || 'PT';
  const maxRetries = options.maxRetries ?? 8;
  let retryDelay = options.retryDelayMs ?? 10000;

  if (!text || text.trim() === '') {
    return text;
  }

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          target_lang: targetLang,
        }),
      });

      if (response.status === 429) {
        console.warn(
          `[DLX 429 Rate Limit] DeepL IP limit reached. Attempt ${attempt}/${maxRetries}. Waiting ${Math.round(retryDelay / 1000)}s...`,
        );
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
        retryDelay = Math.min(retryDelay * 1.5, 60000); // cap max delay at 60s
        continue;
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `DLX API error (${response.status}): ${errorText}`,
        );
      }

      const json = (await response.json()) as {
        code: number;
        data?: string;
        message?: string;
      };

      if (json.code === 200 && typeof json.data === 'string') {
        return json.data;
      } else if (json.code === 429) {
        console.warn(
          `[DLX 429 Payload] Attempt ${attempt}/${maxRetries}: ${json.message}. Waiting ${Math.round(retryDelay / 1000)}s...`,
        );
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
        retryDelay = Math.min(retryDelay * 1.5, 60000);
        continue;
      } else {
        throw new Error(
          `DLX response error code ${json.code}: ${json.message || 'Unknown error'}`,
        );
      }
    } catch (err: any) {
      if (attempt === maxRetries) {
        throw err;
      }
      console.warn(
        `[DLX Connection Warning] Attempt ${attempt}/${maxRetries} failed: ${err.message}. Retrying in ${Math.round(retryDelay / 1000)}s...`,
      );
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
      retryDelay = Math.min(retryDelay * 1.5, 60000);
    }
  }

  throw new Error(`Failed to translate text after ${maxRetries} attempts.`);
}
