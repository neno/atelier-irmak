import { FC } from 'react';
import {
  isCarousel,
  isFeatures,
  isGallery,
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

interface PageContentProps {
  pageContent: PageContentType;
}

export const PageContent: FC<PageContentProps> = ({ pageContent }) => {
  if (isHero(pageContent)) {
    return <Hero image={pageContent.image} title={pageContent.title} />;
  }
  if (isTeaser(pageContent)) {
    return <Teaser {...pageContent} />;
  }
  if (isText(pageContent)) {
    return <Text {...pageContent} />;
  }
  if (isGallery(pageContent)) {
    return (
      <Gallery
        items={pageContent.itemsCollection.items}
        background={pageContent.background}
      />
    );
  }

  if (isFeatures(pageContent)) {
    return (
      <Features
        items={pageContent.sectionsCollection.items}
        background={pageContent.background}
      />
    );
  }

  // if (isCarousel(pageContent)) {
  //   return <Carousel {...pageContent} />;
  // }

  return null;
};
