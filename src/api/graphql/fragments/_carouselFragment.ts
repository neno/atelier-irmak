import { referenceItem } from './_referenceItem';

export const carouselFragment = `
  ... on Carousel {
    title
    autoplay
    autoplaySpeed
    itemsCollection(limit: 9) {
      items {
        __typename
        ${referenceItem}
      }
    }
  }
`;
