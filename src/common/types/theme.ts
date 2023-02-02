export type TRoundness = {
  none: number;
  sm: number;
  md: number;
  lg: number;
  circular: string;
};

export type TShadow = {
  level1: string;
  level2: string;
  level3: string;
  level4: string;
};

export type TSpacing = {
  quarck: number;
  nano: number;
  xxxs: number;
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
  huge: number;
  giant: number;
};

export type TFontWeight = {
  regular: number;
  medium: number;
  bold: number;
};

export type TFontSize = {
  giant: number;
  display: number;
  xxxl: number;
  xxl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
  xxs: number;
  xxxs: number;
};

export type TGrayScale = {
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
};

export type TPaletteColor = {
  lighter: string;
  default: string;
};

export type TPalette = {
  primary: TPaletteColor;
  background: TPaletteColor;
  error: TPaletteColor;
};

type TTheme = {
  roundness: TRoundness;
  shadow: TShadow;
  spacing: TSpacing;
  fontWeight: TFontWeight;
  fontSize: TFontSize;
  grayScale: TGrayScale;
  palette: TPalette;
};

export default TTheme;
