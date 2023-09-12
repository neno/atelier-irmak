import { imageFragment } from './_image';

export const heroFragment = `
  ... on Hero {
    sys { id }
    type
    title
    sliderCollection(limit: 10) {
      items {
        ${imageFragment(2000)}
      }
    }
    image {
      ${imageFragment(2000)}
    }
  }
`;
