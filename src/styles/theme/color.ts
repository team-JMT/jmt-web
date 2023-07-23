export const colors = {
  main100: '#E9FBEB',
  main200: '#FFC6B2',
  main300: '#FF9F80',
  main400: '#FF794D',
  main500: '#FF531A',
  main600: '#E53900',
  main700: '#B22D00',
  main800: '#802000',
  main900: '#4D1300',

  // Path: src/styles/colors.scss
  white: '#ffffff',
  gray100: '#f1f3f4',
  gray200: '#d4dade',
  gray300: '#b7c1c8',
  gray400: '#9aa9b2',
  gray500: '#7d909c',
  gray600: '#637782',
  gray700: '#4b5c65',
  gray800: '#374248',
  gray900: '#161a1d',
} as const;

export type ColorToken = keyof typeof colors;
