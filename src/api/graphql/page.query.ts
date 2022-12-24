import { carouselFragment } from './fragments/_carouselFragment';
import { featuresFragment } from './fragments/_featuresFragment';
import { galleryFragment } from './fragments/_galleryFragment';
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
          contentContainerCollection {
            items {
              sys { id }
              __typename
              ${heroFragment}
              ${teaserItem}
              ${textFragment}
              ${galleryFragment}
              ${featuresFragment}
              ${carouselFragment}
            }
          }
        }
      }
    }
  }
`;