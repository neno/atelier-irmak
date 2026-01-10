import { imageFragment } from "./_image";

export const heroFragment = `
  ... on Hero {
    sys { id }
    type
    title
    image {
      ${imageFragment(2000)}
    }
    cloudinaryImage
    gravity
    sliderCollection {
      items {
        ${imageFragment(2000)}
      }
    }
    linkToPage {
      title
      slug
    }
  }
`;
