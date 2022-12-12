export const imageFragment = (width: number) =>`
  url(transform: {
    format: AVIF
    width: ${width}
  })
  description
  width
  height
`;
