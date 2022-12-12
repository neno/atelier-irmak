import { imageFragment } from './_image';

export const referenceItem = `
  ...on Reference {
    sys { id }
    slug
    title
    subtitle
    excerpt
    featuredImage {
      ${imageFragment(960)}
    }
  }
`;
