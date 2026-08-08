import type { MarkdownFileType } from './file';

export interface BestPracticeFrontmatter {
  jsonUrl: string;
  pdfUrl: string;
  order: number;
  briefTitle: string;
  briefDescription: string;
  title: string;
  description: string;
  isNew: boolean;
  isUpcoming: boolean;
  dimensions?: {
    width: number;
    height: number;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  schema?: {
    headline: string;
    description: string;
    datePublished: string;
    dateModified: string;
    imageUrl: string;
  };
}

export type BestPracticeFileType = MarkdownFileType<BestPracticeFrontmatter> & {
  id: string;
};

function bestPracticePathToId(filePath: string): string {
  const fileName = filePath.split('/').pop() || '';

  return fileName.replace(/\.(pt-br|es|en)\.md$/, '').replace('.md', '');
}

/**
 * Gets the IDs of all the best practices available on the website
 *
 * @returns string[] Array of best practices file IDs
 */
export async function getBestPracticeIds() {
  const bestPracticeFiles = await import.meta.glob<BestPracticeFileType>(
    '/src/data/best-practices/*/*.md',
    {
      eager: true,
    },
  );

  const ids = Object.keys(bestPracticeFiles).map(bestPracticePathToId);
  return Array.from(new Set(ids));
}

/**
 * Gets all the best practice files
 *
 * @returns Promisified BestPracticeFileType[]
 */
export async function getAllBestPractices(): Promise<BestPracticeFileType[]> {
  const bestPracticeFilesMap = await import.meta.glob<BestPracticeFileType>(
    '/src/data/best-practices/*/*.md',
    {
      eager: true,
    },
  );

  const uniqueMap: Record<string, BestPracticeFileType> = {};

  for (const bestPracticeFile of Object.values(bestPracticeFilesMap)) {
    const id = bestPracticePathToId(bestPracticeFile.file);
    if (!uniqueMap[id] || !bestPracticeFile.file.includes('.')) {
      uniqueMap[id] = {
        ...bestPracticeFile,
        id,
      };
    }
  }

  const bestPracticeItems = Object.values(uniqueMap);

  return bestPracticeItems.sort(
    (a, b) => a.frontmatter.order - b.frontmatter.order,
  );
}

/**
 * Gets the best practice file by ID
 *
 * @param id - Best practice file ID
 * @returns BestPracticeFileType
 */

export async function getBestPracticeById(
  id: string,
): Promise<BestPracticeFileType | null> {
  const cleanId = id.replace(/\.json$/, '').replace(/\.(pt-br|es|en)$/, '');

  const bestPracticeFilesMap = import.meta.glob<BestPracticeFileType>(
    '/src/data/best-practices/*/*.md',
    {
      eager: true,
    },
  );

  const bestPracticeFiles = Object.values(bestPracticeFilesMap);
  const bestPracticeFile =
    bestPracticeFiles.find((f) => f.file.endsWith(`/${cleanId}.md`)) ||
    bestPracticeFiles.find(
      (bestPracticeFile) => bestPracticePathToId(bestPracticeFile.file) === cleanId,
    );

  if (!bestPracticeFile) {
    throw new Error(`Best practice with ID ${id} not found`);
  }

  return {
    ...bestPracticeFile,
    id: cleanId,
  };
}
