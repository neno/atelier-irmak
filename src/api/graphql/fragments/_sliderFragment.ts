import { imageFragment } from "./_image";

export const sliderFragment = `
  ...on Slider {
    galleryCollection {  
      items {
        ... on Asset {
          ${imageFragment(2000)}
        }
      }
    }
  }
`;
