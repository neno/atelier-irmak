import { imageFragment } from './_image';

export const heroFragment = `
  ... on Hero {
    sys { id }
    title
    image {
      ${imageFragment(2000)}
    }
  }
`;
