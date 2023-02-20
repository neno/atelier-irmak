import { imageFragment } from './_image';

export const rugItem = `
  ...on Rug {
    sys { id }
    slug
    title
    subtitle
    excerpt
    featuredImage {
      ${imageFragment(2000)}
    }
  }
`;
