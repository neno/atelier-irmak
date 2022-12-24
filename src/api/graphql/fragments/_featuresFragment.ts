import { textFragment } from './_textFragment';

export const featuresFragment = `
  ... on Features {
    background
    sectionsCollection(limit: 9) {
      items {
        __typename
        ${textFragment}
      }
    }
  }
`;
