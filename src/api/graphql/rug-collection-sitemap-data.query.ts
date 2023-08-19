export const rugCollectionSitemapDataQuery = `
  query {
    rugCollection {
      items {
        slug
        sys {
          publishedAt
        }
      }
    }
  }
`;
