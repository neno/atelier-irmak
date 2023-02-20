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
        size
        age
        palette
        location
        room
        placing
        featuredImage {
          ... on Asset {
            ${imageFragment(960)}
          }
        }
        galleryCollection {
          items {
            ... on Asset {
              ${imageFragment(960)}
            }
          }
        }
      }
    }
  }
`;
