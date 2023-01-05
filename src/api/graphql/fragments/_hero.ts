import { imageFragment } from './_image';

export const heroFragment = `
  ... on Hero {
    sys { id }
    type
    title
    image {
      ${imageFragment(2000)}
    }
  }
`;
