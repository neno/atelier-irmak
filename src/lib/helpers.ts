import i18n from '@/data/i18n.json';
import {Metadata} from "next";
import {IMetadata, ISitemapEntry} from "@/schema/types";

export const imageWidth = (
  sliderHeight: number,
  imageWidth: number,
  imageHeight: number
): number => {
  return Math.round((imageWidth * sliderHeight) / imageHeight);
};

export function t(key: string): string {
  const translation = (i18n as Record<string, string>)[key];
  return translation ?? '';
}

export function truncate(str: string, length = 110) {
  const truncated = str.substring(0, length);
  return `${truncated}...`;
}

export function createMetadata ({ title, description, slug, metadataBase, ogImage} : IMetadata) : Metadata {
  return {
    title: `${title} | ${process.env.SITE_NAME}`,
    description: description,
    openGraph: {
      title: title ?? undefined,
      description: description ?? undefined,
      url: slug,
      images: [
        {
          url: ogImage?.url ?? `/images/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    metadataBase: metadataBase,
  }
}

export function createSitemapEntry(url: string, lastModified: string | Date, priority = 0.5, changefreq: 'daily' | 'weekly' | 'monthly' = 'daily') : ISitemapEntry {

  return {
    url,
    lastModified,
    changefreq,
    priority,
  };
}