import i18n from '@/data/i18n.json';
import {Metadata} from "next";

export function getOptimalImageFormat(imageUrl: string, format = 'avif'): string {
  return `${imageUrl}?fm=${format}`;
}

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

export function createMetadata (title?: string, description?: string, slug?: string, image?: string, metadataBase?: URL) : Metadata {
  return {
    title: `${title} | ${process.env.SITE_NAME}`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: slug,
      images: [
        {
          url: image ?? `${process.env.SITE_URL}/images/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    metadataBase: metadataBase,
  }
}