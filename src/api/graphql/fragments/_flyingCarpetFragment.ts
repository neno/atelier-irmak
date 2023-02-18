import { imageFragment } from './_image';

export const flyingCarpetFragment = `
... on FlyingCarpet {
  link {
    __typename
    ... on Reference {
      slug
    }
    ... on Rug {
      slug
    }

  }
  template
  text {json}
  mediaCollection {
    items {
      ... on Asset {
        ${imageFragment(1400)}
      }
    }
  }
}
`;
