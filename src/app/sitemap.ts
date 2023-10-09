import { MetadataRoute } from 'next'
import {
  fetchPageCollectionSitemapData,
  fetchRugCollectionSitemapData
} from "src/api";
import {createSitemapEntry} from "@/lib/helpers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [{ pageCollection }, { rugCollection }] = await Promise.all([
    fetchPageCollectionSitemapData(),
    fetchRugCollectionSitemapData()
  ]);

  const pages = pageCollection.items.map(({ slug, sys }) => createSitemapEntry(
    `${process.env.SITE_URL}/${slug !== '/' ? slug : ''}`,
    sys.publishedAt,
  ));

  const rugs = rugCollection.items.map(({ slug, sys }) => createSitemapEntry(
    `${process.env.SITE_URL}/kollektion/${slug}`,
    sys.publishedAt,
  ));

  return [
    ...pages,
    ...rugs,
  ]
}