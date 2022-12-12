import { referenceItem } from './_referenceItem';

export const galleryFragment = `
  ... on Gallery {
    itemsCollection(limit: 9) {
      items {
        __typename
        ${referenceItem}
      }
    }
  }
`;
