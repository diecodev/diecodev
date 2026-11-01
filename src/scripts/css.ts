// Reads a computed length such as "88px" as a number; anything else counts as 0.
export const px = (value: string) =>
  Number(value.trim().replace(/px$/u, "")) || 0;
