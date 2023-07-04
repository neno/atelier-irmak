import i18n from '@/data/i18n.json';

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