import { COLORS, Colors } from "./colors";
import { SIZES, Sizes } from "./sizes";

export type Theme = {
  colors: Colors;
  fontSizes: Sizes;
  fontFamily: string;
};

export const THEME: Theme = {
  colors: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    text: COLORS.text,
    background: COLORS.background,
  },
  fontSizes: {
    small: SIZES.small,
    medium: SIZES.medium,
    large: SIZES.large,
  },
  fontFamily: "sans-serif",
};
