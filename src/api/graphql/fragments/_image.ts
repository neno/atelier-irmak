export const imageFragment = (width: number, height: number | null = null) =>`
  url(transform: {
    format: WEBP
    width: ${width}
    height: ${height},
    resizeStrategy: FILL
  })
  description
  width
  height
`;
