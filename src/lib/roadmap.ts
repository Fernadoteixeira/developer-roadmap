import type { PageType } from '../components/CommandMenu/CommandMenu';
import type { Locale } from '../i18n';
import { defaultLocale, normalizeLocale } from '../i18n';
import type { MarkdownFileType } from './file';
import { httpGet } from './http';
import type { ResourceType } from './resource-progress';

export function resourceTitleFromId(id: string): string {
  if (id === 'devops') {
    return 'DevOps';
  }

  return id
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export type AllowedRoadmapRenderer = 'balsamiq' | 'editor';

export interface RoadmapFrontmatter {
  pdfUrl: string;
  order: number;
  briefTitle: string;
  briefDescription: string;
  title: string;
  description: string;
  hasTopics: boolean;
  isForkable?: boolean;
  isHidden: boolean;
  isNew: boolean;
  isUpcoming: boolean;
  partner?: {
    description: string;
    link: string;
    linkText: string;
  };
  courses?: {
    title: string;
    description: string;
    link: string;
    instructor: {
      name: string;
      image: string;
      title: string;
    };
    features: string[];
  }[];
  note?: string;
  question?: {
    title: string;
    description: string;
  };
  dimensions?: {
    width: number;
    height: number;
  };
  seo: {
    title: string;
    description: string;
    ogImageUrl?: string;
    keywords: string[];
  };
  schema?: {
    headline: string;
    description: string;
    datePublished: string;
    dateModified: string;
    imageUrl: string;
  };
  relatedRoadmaps: string[];
  relatedQuestions: string[];
  sitemap: {
    priority: number;
    changefreq: string;
  };
  tags: string[];
  renderer?: AllowedRoadmapRenderer;
}

export type RoadmapFileType = MarkdownFileType<RoadmapFrontmatter> & {
  id: string;
};

type LocalizedRoadmapFile = RoadmapFileType & {
  locale: Locale;
};

function parseRoadmapPath(filePath: string): { id: string; locale: Locale } {
  const fileName = filePath.split('/').pop() || '';
  const stem = fileName.replace(/\.md$/, '');
  const localizedMatch = stem.match(/^(.*)\.(en|es|pt-br)$/i);

  if (!localizedMatch) {
    return { id: stem, locale: defaultLocale };
  }

  return {
    id: localizedMatch[1],
    locale: normalizeLocale(localizedMatch[2]),
  };
}

function getAllRoadmapFiles(): LocalizedRoadmapFile[] {
  const roadmapFilesMap = import.meta.glob<RoadmapFileType>(
    '/src/data/roadmaps/*/*.md',
    { eager: true },
  );

  return Object.values(roadmapFilesMap).map((roadmapFile) => {
    const parsed = parseRoadmapPath(roadmapFile.file);
    return {
      ...roadmapFile,
      id: parsed.id,
      locale: parsed.locale,
    };
  });
}

function selectLocalizedRoadmap(
  files: LocalizedRoadmapFile[],
  locale: Locale,
): LocalizedRoadmapFile | undefined {
  return (
    files.find((file) => file.locale === locale) ||
    files.find((file) => file.locale === defaultLocale) ||
    files[0]
  );
}

export async function getRoadmapIds() {
  return [...new Set(getAllRoadmapFiles().map((file) => file.id))];
}

export async function getRoadmapsByTag(
  tag: string,
  locale: Locale = defaultLocale,
): Promise<RoadmapFileType[]> {
  const groupedById = new Map<string, LocalizedRoadmapFile[]>();

  for (const roadmapFile of getAllRoadmapFiles()) {
    const files = groupedById.get(roadmapFile.id) || [];
    files.push(roadmapFile);
    groupedById.set(roadmapFile.id, files);
  }

  return [...groupedById.values()]
    .map((files) => selectLocalizedRoadmap(files, locale))
    .filter((file): file is LocalizedRoadmapFile => Boolean(file))
    .filter((file) => file.frontmatter.tags.includes(tag))
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
    .map(({ locale: _locale, ...file }) => file);
}

export async function getRoadmapById(
  requestedId: string,
  locale: Locale = defaultLocale,
): Promise<RoadmapFileType> {
  const parsedRequest = parseRoadmapPath(`${requestedId}.md`);
  const canonicalId = parsedRequest.id;
  const requestedLocale = requestedId.includes('.')
    ? parsedRequest.locale
    : locale;
  const candidates = getAllRoadmapFiles().filter(
    (roadmapFile) => roadmapFile.id === canonicalId,
  );
  const roadmapFile = selectLocalizedRoadmap(candidates, requestedLocale);

  if (!roadmapFile) {
    throw new Error(`Roadmap with ID ${canonicalId} not found`);
  }

  const { locale: _locale, ...canonicalRoadmapFile } = roadmapFile;
  return canonicalRoadmapFile;
}

export async function getRoadmapsByIds(
  ids: string[],
  locale: Locale = defaultLocale,
): Promise<RoadmapFileType[]> {
  if (!ids?.length) {
    return [];
  }

  return Promise.all(ids.map((id) => getRoadmapById(id, locale)));
}

export async function getRoadmapFaqsById(roadmapId: string): Promise<any[]> {
  const faqFilesMap: Record<string, { faqs?: any[] }> = import.meta.glob(
    '/src/data/roadmaps/*/faqs.astro',
    { eager: true },
  );

  const matchingPath = Object.keys(faqFilesMap).find((filePath) =>
    filePath.includes(`/data/roadmaps/${roadmapId}/faqs.astro`),
  );

  return (matchingPath && faqFilesMap[matchingPath]?.faqs) || [];
}

export async function getResourceMeta(
  resourceType: ResourceType,
  resourceId: string,
) {
  const { error, response } = await httpGet<PageType[]>(`/pages.json`);
  if (error || !response) {
    return null;
  }

  const page = response.find((page) => {
    if (resourceType === 'roadmap') {
      return page.url === `/${resourceId}`;
    } else if (resourceType === 'best-practice') {
      return page.url === `/best-practices/${resourceId}`;
    }

    return false;
  });

  if (!page) {
    return null;
  }

  return page;
}
