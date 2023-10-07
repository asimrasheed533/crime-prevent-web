export function replacePngWithWebp(image) {
  if (image !== undefined) {
    return image.replace(".png", ".webp");
  }
}
