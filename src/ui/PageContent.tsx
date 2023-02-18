import { FC } from 'react';
import {
  // isCarousel,
  isFeatures,
  isFlyingCarpet,
  isGallery,
  isGrid,
  isHero,
  isTeaser,
  isText,
} from '@/schema/guards';
import { PageContentType } from '@/schema/types';
import { Hero } from './hero/Hero';
import { Teaser } from './teaser/Teaser';
import { Text } from './Text';
import { Carousel } from './carousel/Carousel';
import { Gallery } from './Gallery';
import { Features } from './Features';
import { Grid } from './grid/Grid';
import { FlyingCarpet } from './flying-carpet/FlyingCarpet';

interface PageContentProps {
  pageContent: PageContentType;
}

export const PageContent: FC<PageContentProps> = ({ pageContent }) => {
  if (isFeatures(pageContent)) {
    return (
      <Features
        items={pageContent.sectionsCollection.items}
        background={pageContent.background}
      />
    );
  }
  if (isFlyingCarpet(pageContent)) {
    return <FlyingCarpet {...pageContent} />;
  }
  if (isGallery(pageContent)) {
    return (
      <Gallery
        items={pageContent.itemsCollection.items}
        background={pageContent.background}
      />
    );
  }
  if (isGrid(pageContent)) {
    return <Grid {...pageContent} />;
  }
  if (isHero(pageContent)) {
    return <Hero {...pageContent} />;
  }
  if (isTeaser(pageContent)) {
    return <Teaser {...pageContent} />;
  }
  if (isText(pageContent)) {
    return <Text {...pageContent} />;
  }

  throw new Error(`Teaser type ${pageContent.__typename} not found`);
};
