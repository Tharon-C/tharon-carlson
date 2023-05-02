import colorUtil from "color";

const primary = "#ed6141" // Orange
const secondary = "#b499d1" // Purple
const tertiary = "#aee28f" // Green
export const colors = {
  primary,
  primaryDark: colorUtil(primary)
    .darken(0.2)
    .hex(),
  primaryLight: colorUtil(primary)
    .lighten()
    .hex(),
  secondary, //purple
  secondary2: colorUtil(secondary)
    .darken(0.2)
    .hex(),
  secondary3: colorUtil(secondary)
    .lighten(0.5)
    .hex(),
  tertiary, // Green
  tertiary2: colorUtil(tertiary)
    .darken(0.2)
    .hex(),
  tertiary3: colorUtil(tertiary)
    .lighten(0.5)
    .hex(),
  danger: "#D0001B",
  alert: "#FFBE00",
  success: "#56A100",
  white: "#FAFAFA",
  black: "#171717",
  grey1: "#f5f5f5",
  grey2: "#eeeeee",
  grey3: "#e0e0e0",
  grey4: "#bdbdbd",
  grey5: "#9e9e9e",
  grey6: "#757575",
  grey7: "#616161",
  grey8: "#424242",
  grey9: "#212121",
  sky: {
    day: "#d1f2fe"
  }
};

export const baseUnit = 4;
export const space = [
  baseUnit,
  baseUnit * 2,
  baseUnit * 4,
  baseUnit * 8,
  baseUnit * 16,
  baseUnit * 32
]

export const radii = [
  2,
  6,
  16,
  9000
]

export const strokeWidth = [
  1,
  3,
  5
]

export const type = {
  fontFamily: {
    system:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
    sans: '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif',
    sans2: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    serif: 'Georgia, "Times New Roman", Times, serif',
    mono: 'Menlo, Monaco, "Courier New", monospace'
  },
  fontWeight: [
    400,
    500,
    600,
    800
  ],
  fontSize: [
    14,
    16,
    18,
    20,
    24,
    34,
    48,
    60,
    96
  ]
}

export const breakPoints = {
  small: 480,
  medium: 760,
  large: 1200
}

export const base = {
  baseUnit,
  space,
  colors,
  radii,
  strokeWidth,
  ...type,
  breakPoints
}

export default base

