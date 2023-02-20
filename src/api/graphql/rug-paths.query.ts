export const rugPathsQuery = `
  query {
    rugCollection {
      items {
        ...on Rug {
          slug
        }
      }
    }
  }
`;
