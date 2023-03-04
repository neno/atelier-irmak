import { imageFragment } from './_image';

export const rugItem = `
  ...on Rug {
    sys { id }
    slug
    name
    featuredImage {
      ${imageFragment(2000)}
    }
  }
`;
