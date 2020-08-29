import {Appearance} from 'react-native-appearance';

let isDark = Appearance.getColorScheme() === 'dark';

export const settings = {
  // Colors
  $white: isDark ? 'black' : 'white',

  $grey_dark: isDark ? '#F9F9F9' : '#191919',
  $grey_medium: isDark ? '#D0D0D' : '#A2A5AF',
  $grey_light: isDark ? '#A2A5AF' : '#D0D0D0',
  $grey_lighter: isDark ? '#89898A' : '#F9F9F9',

  $green: '#43DE78',
  $red: '#FF4D4D',

  // @Colors

  // Sizes
  $size_xxs: 4,
  $size_xs: 8,
  $size_s: 12,
  $size_default: 16,
  $size_m: 18,
  $size_l: 24,
  $size_xl: 36,
  $size_xxl: 48,
  $size_kilo: 56,
  $size_mega: 64,
  $size_giga: 72,
  $size_super: 96,
  // @Sizes

  // Fonts
  $font_regular: 'Gellix-Regular',
  $font_semiBold: 'Gellix-Semibold',
  $font_bold: 'Gellix-Bold',
  // @Fonts

  // zIndex
  $z_index_back: -10,
  $z_index_normal: 1,
  $z_index_tooltip: 10,
  $z_index_fixed: 100,
  $z_index_modal: 1000,
  // @zIndex
};
