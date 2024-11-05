import { imageFragment } from './_image';

export const FeatureItem = `
  ... on Feature {
    sys {
      id
    }
    __typename
    media {
      ${imageFragment(550)}
    }
    title
    text
    page {
      slug
    }
  }
`;
