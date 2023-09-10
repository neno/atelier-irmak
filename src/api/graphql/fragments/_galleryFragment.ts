import { rugItem } from './_rugItem';

export const galleryFragment = `
  ... on Gallery {
    background
    itemsCollection(limit: 16) {
      items {
        __typename
        ${rugItem}
      }
    }
  }
`;
