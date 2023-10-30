import { imageFragment } from './fragments/_image';

export const getRugBySlugQuery = (slug: string, preview: boolean) => `
  query {
    rugCollection(where: {slug: "${slug}"}, preview: ${preview}) {
      items {
        slug
        title
        subtitle
        excerpt
        description {json}
        name
        type
        origin {
          ... on Origin {
            name
          }
        }
        country {
          ... on Country {
            name
          }
        }
        length
        width
        dating
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
        ogImage: featuredImage {
          ... on Asset {
            ${imageFragment(1200, 630)}
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
