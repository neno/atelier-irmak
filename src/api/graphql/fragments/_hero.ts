import { imageFragment } from './_image';

export const heroFragment = `
  ... on Hero {
    sys { id }
    type
    title
    image {
      ${imageFragment(2000)}
    }
    sliderCollection {
      items {
        ${imageFragment(2000)}
      }
    }
  }
`;
