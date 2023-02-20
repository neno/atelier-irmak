import { imageFragment } from './_image';

export const flyingCarpetFragment = `
... on FlyingCarpet {
  sys { id }
  link {
    __typename
    ... on Rug {
      slug
    }

  }
  template
  backgroundColor
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
