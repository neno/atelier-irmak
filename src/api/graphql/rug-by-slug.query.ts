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
        type
        origin
        country {
          ... on Country {
            name
          }
        }
        length
        width
        dating
        age {
          ... on Age {
            name
            description
          }
        }
        palette
        colors
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
