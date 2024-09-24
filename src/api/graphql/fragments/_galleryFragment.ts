import { rugItem } from './_rugItem';

export const galleryFragment = `
  ... on Gallery {
    background
    itemsCollection(limit: 36) {
      items {
        __typename
        ${rugItem}
      }
    }
  }
`;
