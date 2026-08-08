import type { MarkdownFileType } from './file';

export interface AuthorFrontmatter {
  name: string;
  imageUrl: string;
  employment?: {
    title: string;
    company: string;
  };
  social: {
    twitter: string;
    github: string;
    linkedin: string;
    website: string;
  };
}

export type AuthorFileType = MarkdownFileType<AuthorFrontmatter> & {
  id: string;
};

function authorPathToId(filePath: string): string {
  const fileName = filePath.split('/').pop() || '';

  return fileName.replace(/\.(pt-br|es|en)\.md$/, '').replace('.md', '');
}

/**
 * Gets the IDs of all the authors available on the website
 *
 * @returns string[] Array of author IDs
 */
export async function getAuthorIds() {
  const authorFiles = import.meta.glob<AuthorFileType>(
    '/src/data/authors/*.md',
    {
      eager: true,
    },
  );

  const ids = Object.keys(authorFiles).map(authorPathToId);
  return Array.from(new Set(ids));
}

export async function getAllAuthors(): Promise<AuthorFileType[]> {
  const authorFilesMap: Record<string, AuthorFileType> =
    import.meta.glob<AuthorFileType>('/src/data/authors/*.md', {
      eager: true,
    });

  const uniqueAuthorsMap: Record<string, AuthorFileType> = {};

  for (const authorFile of Object.values(authorFilesMap)) {
    const id = authorPathToId(authorFile.file);
    if (!uniqueAuthorsMap[id] || !authorFile.file.includes('.')) {
      uniqueAuthorsMap[id] = {
        ...authorFile,
        id,
      };
    }
  }

  return Object.values(uniqueAuthorsMap);
}

export async function getAuthorById(id: string): Promise<AuthorFileType> {
  const cleanId = id.replace(/\.json$/, '').replace(/\.(pt-br|es|en)$/, '');

  const authorFilesMap: Record<string, AuthorFileType> =
    import.meta.glob<AuthorFileType>('/src/data/authors/*.md', {
      eager: true,
    });

  const authorFiles = Object.values(authorFilesMap);

  // Prefer canonical .md over localized variants
  const authorFile =
    authorFiles.find((f) => f.file.endsWith(`/${cleanId}.md`)) ||
    authorFiles.find((f) => authorPathToId(f.file) === cleanId);

  if (!authorFile) {
    throw new Error(`Author with ID ${id} not found`);
  }

  return {
    ...authorFile,
    id: cleanId,
  };
}
