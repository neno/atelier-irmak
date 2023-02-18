import { ICarousel, IFeatures, IFlyingCarpet, IGallery, IGrid, IHero, IReferenceItem, ITeaser, IText, PageContentGuardType } from './types';

export const isHero = (x: PageContentGuardType): x is IHero =>
  x.__typename === 'Hero';

export const isTeaser = (x: PageContentGuardType): x is ITeaser =>
  x.__typename === 'Teaser';

export const isText = (x: PageContentGuardType): x is IText =>
  x.__typename === 'Text';

export const isCarousel = (x: PageContentGuardType): x is ICarousel =>
  x.__typename === 'Carousel';

export const isGallery = (x: PageContentGuardType): x is IGallery =>
  x.__typename === 'Gallery';

export const isFeatures = (x: PageContentGuardType): x is IFeatures =>
  x.__typename === 'Features';

export const isReferenceItem = (x: PageContentGuardType): x is IReferenceItem =>
  x.__typename === 'Reference';

export const isGrid = (x: PageContentGuardType): x is IGrid =>
  x.__typename === 'Grid';

export const isFlyingCarpet = (x: PageContentGuardType): x is IFlyingCarpet =>
  x.__typename === 'FlyingCarpet';
