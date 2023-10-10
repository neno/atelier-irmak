import { navigationQuery } from './graphql/navigation.query';
import { pageCollectionPathsQuery } from './graphql/page-collection-paths.query';
import { pageQuery } from './graphql/page.query';
import { getRugBySlugQuery } from './graphql/rug-by-slug.query';
import {
  INavigationItem,
  IPageCollectionPaths,
  IRugCollectionPaths,
  IRug,
  PageContentType,
  IPageMetadata,
  IPageCollectionSitemapData, IRugCollectionSitemapData, IEntry
} from '@/schema/types';
import { rugCollectionPathsQuery } from './graphql/rug-collection-paths.query';
import {pageCollectionSitemapDataQuery} from "@/api/graphql/page-collection-sitemap-data.query";
import {rugCollectionSitemapDataQuery} from "@/api/graphql/rug-collection-sitemap-data.query";
import {entryByIdQuery} from "@/api/graphql/entry.query";

const headers = (preview: boolean) => ({
  Authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_API_KEY : process.env.CONTENTFUL_API_KEY}`,
  'Content-Type': 'application/json',
});

async function fetchData<T>(query: string, preview = false) {
  try {
    const url =
      'https://graphql.contentful.com/content/v1/spaces/52k427pz1yee/environments/master';
    const result = await fetch(url, {
      method: 'POST',
      headers: headers(preview),
      body: JSON.stringify({ query }),
    });

    if (!result.ok) {
      throw result;
    }

    const { data } = await result.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}


export async function getRugBySlug(
  slug: string,
  preview: boolean,
): Promise<IRug | undefined> {
  const query = getRugBySlugQuery(slug, preview);
  const {
    rugCollection: { items },
  } = await fetchData(query, preview);

  return items[0];
}

export async function fetchPageCollectionSitemapData(): Promise<IPageCollectionSitemapData> {
  return await fetchData(pageCollectionSitemapDataQuery);
}

export async function fetchRugCollectionPaths(): Promise<IRugCollectionPaths> {
  return await fetchData(rugCollectionPathsQuery);
}

export async function fetchPageCollectionPaths(): Promise<IPageCollectionPaths> {
  return await fetchData(pageCollectionPathsQuery);
}

export async function fetchRugCollectionSitemapData(): Promise<IRugCollectionSitemapData> {
  return await fetchData(rugCollectionSitemapDataQuery);
}

export async function fetchPageContentItemsBySlug(slug: string): Promise<PageContentType[] | undefined> {
  try {
    const query = pageQuery(slug);
    const data = await fetchData(query);

    return data.pageCollection?.items?.[0]?.contentContainerCollection.items ?? undefined;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchPageMetadataBySlug(slug: string): Promise<IPageMetadata | undefined> {
  try {
    const query = pageQuery(slug);
    const data = await fetchData(query);

    if (!data.pageCollection?.items?.[0]) return undefined;

    const { metadata, title } = data.pageCollection?.items?.[0];
    return {title, ...metadata};

  } catch (error) {
    console.error(error);
  }
}

export async function fetchNavigationItems(): Promise<INavigationItem[] | undefined> {
  try {
    const data = await fetchData<INavigationItem[]>(navigationQuery);
    const { items } = data.navigationCollection?.items[0].navigationItemsCollection;
    return items;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchEntryById(id: string, preview: boolean) : Promise<IEntry | undefined> {
  try {
    const query = entryByIdQuery(id, preview)
    const data = await fetchData(query, preview);
    const { items } = data.entryCollection;
    return items[0];
  } catch (error) {
    console.error(error)
  }
}
