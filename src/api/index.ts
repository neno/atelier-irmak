import { navigationQuery } from './graphql/navigation.query';
import { pageCollectionPathsQuery } from './graphql/page-collection-paths.query';
import { pageQuery } from './graphql/page.query';
import { getRugBySlugQuery } from './graphql/rug-by-slug.query';
import { INavigationItem, IPageCollectionPaths, IRugCollectionPaths, IRug, PageContentType } from '@/schema/types';
import { rugCollectionPathsQuery } from './graphql/rug-collection-paths.query';

const headers = {
  Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
  'Content-Type': 'application/json',
};

async function fetchData<T>(query: string) {
  try {
    const url =
      'https://graphql.contentful.com/content/v1/spaces/52k427pz1yee/environments/master';
    const result = await fetch(url, {
      method: 'POST',
      headers,
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
  slug: string
): Promise<IRug | undefined> {
  const query = getRugBySlugQuery(slug);
  const {
    rugCollection: { items },
  } = await fetchData(query);

  return items[0];
}

export async function fetchPageCollectionPaths(): Promise<IPageCollectionPaths> {
  const pageCollection = await fetchData(pageCollectionPathsQuery);
  return pageCollection;
}

export async function fetchRugCollectionPaths(): Promise<IRugCollectionPaths> {
  const rugCollection = await fetchData(rugCollectionPathsQuery);
  return rugCollection;
}

export async function fetchPageContentItemsBySlug(slug: string): Promise<PageContentType[] | undefined> {
  try {
    const query = pageQuery(slug);
    const data = await fetchData(query);
    
    const { items } = data.pageCollection?.items?.[0]?.contentContainerCollection ?? [];
    return items;
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
