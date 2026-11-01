import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";

const PREVIEW_WIDTH = 480;

// The hover preview shows a small WebP of the case's cover, when it has one.
export const previewImage = async (cover: ImageMetadata | undefined) => {
  if (!cover) {
    return null;
  }
  const image = await getImage({
    format: "webp",
    src: cover,
    width: PREVIEW_WIDTH,
  });
  return image.src;
};
