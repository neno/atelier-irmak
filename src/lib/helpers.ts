import i18n from '@/data/i18n.json';
import {
  IReference,
  IReferenceQueryData,
} from '@/schema/types';

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

export function mapDataToReference(data: IReferenceQueryData): IReference {
  const {
    title,
    subtitle,
    excerpt,
    description,
    location,
    room,
    placing,
    rug,
    galleryCollection: {items},
  } = data;
  const { name, text, origin, size, age, detailImage } = rug;
  const defList = {
    location,
    room,
    placing,
    name,
    origin,
    size,
    age,
  };

  return {
    title,
    subtitle,
    excerpt,
    body: text,
    description,
    definition: defList,
    detailImage: detailImage,
    galleryItems: items,
  };
}

export function truncate(str: string, length = 110) {
  const truncated = str.substring(0, length);
  return `${truncated}...`;
}