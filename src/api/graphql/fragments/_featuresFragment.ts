import { FeatureItem } from "./_featureItem";
import { textFragment } from "./_textFragment";

export const featuresFragment = `
  ... on Features {
    background
    columns
    sectionsCollection(limit: 9) {
      items {
        __typename
        ${textFragment}
        ${FeatureItem}
      }
    }
  }
`;
