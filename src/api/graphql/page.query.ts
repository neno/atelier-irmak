import { featuresFragment } from './fragments/_featuresFragment';
import { flyingCarpetFragment } from './fragments/_flyingCarpetFragment';
import { galleryFragment } from './fragments/_galleryFragment';
import { gridFragment } from './fragments/_gridFragment';
import { heroFragment } from './fragments/_hero';
import { sliderFragment } from './fragments/_sliderFragment';
import { teaserItem } from './fragments/_teaserItem';
import { textFragment } from './fragments/_textFragment';
import {imageFragment} from "@/api/graphql/fragments/_image";

export const pageQuery = (slug: string) => `
  query {
    pageCollection(where: { slug: "${slug}" } limit: 1) {
      items {
        ... on Page {
          title
          slug
          metadata {
            title
            description
            ogImage {
              ... on Asset {
                ${imageFragment(1200, 630)}
              }
            }
          }
          contentContainerCollection {
            items {
              sys { id }
              __typename
              ${heroFragment}
              ${flyingCarpetFragment}
              ${teaserItem}
              ${textFragment}
              ${galleryFragment}
              ${featuresFragment}
              ${gridFragment}
              ${sliderFragment}
            }
          }
        }
      }
    }
  }
`;