import { imageFragment } from './_image';

export const teaserItem = `
  ... on Teaser {
    sys { id }
    type
    title
    text {
      richText {
        json
      }
    }
    link{
      title
      page {
        slug
      }
      externalUrl
    }
    image {
      ${imageFragment(1880)}
    }
  }
`;
