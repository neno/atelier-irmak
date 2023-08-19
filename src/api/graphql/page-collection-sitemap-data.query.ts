export const pageCollectionSitemapDataQuery = `
  query {
    pageCollection {
      items {
        slug
        sys {
          publishedAt
        }
      }
    }
  }
`;
