import { featuresFragment } from './fragments/_featuresFragment';
import { flyingCarpetFragment } from './fragments/_flyingCarpetFragment';
import { galleryFragment } from './fragments/_galleryFragment';
import { gridFragment } from './fragments/_gridFragment';
import { heroFragment } from './fragments/_hero';
import { teaserItem } from './fragments/_teaserItem';
import { textFragment } from './fragments/_textFragment';

export const pageQuery = (slug: string) => `
  query {
    pageCollection(where: { slug: "${slug}" } limit: 1) {
      items {
        ... on Page {
          title
          slug
          description
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
            }
          }
        }
      }
    }
  }
`;