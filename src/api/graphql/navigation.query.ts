export const navigationQuery = `query {
  navigationCollection(where: {name: "Main Navigation"} limit: 1) {
    items {
      navigationItemsCollection {
        items {
          title
          page {
            slug
          }
        }
      }
    }
  }
}`;
