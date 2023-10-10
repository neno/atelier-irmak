export const entryByIdQuery = (id: string, preview: boolean) => `
  query {
    entryCollection(where: { sys: {id: "${id}"}}, preview: ${preview}) {
      items {
        sys {
          id
        }
        ...on Rug {
          slug
          __typename
        }
      }
    }
  }
`;
