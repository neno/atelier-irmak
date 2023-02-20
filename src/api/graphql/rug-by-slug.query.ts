import { imageFragment } from './fragments/_image';

export const getRugBySlugQuery = (slug: string) => `
  query {
    rugCollection(where: {slug: "${slug}"}) {
      items {
        slug
        title
        subtitle
        excerpt
        description {json}
        name
        origin
        originGeolocation {
          lat
          lon
        }
        length
        width
        age
        palette
        location
        room
        placing
        featuredImage {
          ... on Asset {
            ${imageFragment(2000)}
          }
        }
        galleryCollection {
          items {
            ... on Asset {
              ${imageFragment(2000)}
            }
          }
        }
      }
    }
  }
`;
