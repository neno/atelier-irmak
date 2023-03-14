export const imageFragment = (width: number) =>`
  url(transform: {
    format: WEBP
    width: ${width}
  })
  description
  width
  height
`;
