export const referencePathsQuery = `
  query {
    referenceCollection {
      items {
        ...on Reference {
          slug
        }
      }
    }
  }
`;
