import { imageFragment } from './_image';
import { textFragment } from './_textFragment';

export const gridFragment = `
  ... on Grid {
    sys {id}
    background
    layout
    columnsCollection (limit: 12) {
      items {
        ... on GridColumn {
          sys{id}
          reference {
            __typename
            ${textFragment}
          }
          media {
            ... on Asset {
              ${imageFragment(2000)}
            }
          }
        }
      }
    }
  }
`;
