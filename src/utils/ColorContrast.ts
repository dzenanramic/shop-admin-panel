export const hexToRGB = (hex: string) => {
  hex = hex?.replace('#', '');

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4), 16);

  return { r, g, b };
};

export const isColorDark = (color?: string) => {
  if (!color) return '';
  const { r, g, b } = hexToRGB(color);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
};
