import { imageFragment } from './_image';

export const teaserItem = `
  ... on Teaser {
    sys { id }
    slug
    type
    title
    subtitle
    excerpt
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
    }
    image {
      ${imageFragment(1200)}
    }
  }
`;
