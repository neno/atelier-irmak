import { FC } from "react";
import {
  isFeatures,
  isFlyingCarpet,
  isGallery,
  isGrid,
  isHero,
  isSlider,
  isTeaser,
  isText,
} from "@/schema/guards";
import { PageContentType } from "@/schema/types";
import { Hero } from "./hero/Hero";
import { Teaser } from "./teaser/Teaser";
import { Text } from "./Text";
import { Gallery } from "./Gallery";
import { Features } from "./Features";
import { Grid } from "./grid/Grid";
import { FlyingCarpet } from "./flying-carpet/FlyingCarpet";
import { Container } from "./Container";
import { SliderWithModal } from "./SliderWithModal";

interface PageContentProps {
  pageContent: PageContentType;
}

export const PageContent: FC<PageContentProps> = ({ pageContent }) => {
  if (isFeatures(pageContent)) {
    return (
      <Features
        items={pageContent.sectionsCollection.items}
        background={pageContent.background}
        columns={pageContent.columns}
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

  if (isSlider(pageContent)) {
    return (
      <Container className="my-8 xl:my-16">
        <SliderWithModal galleryItems={pageContent.galleryCollection.items} />
      </Container>
    );
  }

  throw new Error(`Teaser type ${pageContent.__typename} not found`);
};
