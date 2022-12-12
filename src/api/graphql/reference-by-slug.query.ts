import { referenceItem } from './fragments/_referenceItem';

export const getReferenceBySlugQuery = (slug: string) => `
  query {
    referenceCollection(where: {slug: "${slug}"}) {
      items {
        ... on Reference {
          title
          subtitle
          excerpt
          description {json}
          location
          room
          placing
          rug {
            ... on Rug {
              name
              text
              origin
              size
              age
              palette
              detailImage {
                url
                description
                title
                width
                height
              }
            }
          }
          galleryCollection {
            items {
              ... on Asset {
                url
                description
                title
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;
