import TTheme from '../types/theme';

const theme: TTheme = {
  roundness: {
    none: 0,
    sm: 5,
    md: 8,
    lg: 16,
    circular: '50%',
  },
  shadow: {
    level1: '0px 4px 8px rgba(165, 171, 179, 0.16)',
    level2: '0px 8px 24px rgba(165, 171, 179, 0.4)',
    level3: '0px 16px 24px rgba(165, 171, 179, 0.4)',
    level4: '0px 16px 48px rgba(165, 171, 179, 0.4)',
  },
  spacing: {
    quarck: 4,
    nano: 8,
    xxxs: 16,
    xxs: 24,
    xs: 32,
    sm: 40,
    md: 48,
    lg: 56,
    xl: 64,
    xxl: 80,
    xxxl: 96,
    huge: 104,
    giant: 112,
  },
  fontWeight: {
    regular: 400,
    medium: 600,
    bold: 700,
  },
  fontSize: {
    giant: 96,
    display: 80,
    xxxl: 64,
    xxl: 52,
    lg: 32,
    md: 20,
    sm: 18,
    xs: 16,
    xxs: 14,
    xxxs: 12,
  },
  grayScale: {
    gray100: '#FFFFFF',
    gray200: '#FAFBFC',
    gray300: '#F5F7F8',
    gray400: '#DDE2E5',
    gray500: '#ACB5BD',
    gray600: '#565E66',
    gray700: '#353A42',
    gray800: '#212429',
  },
  palette: {
    primary: {
      lighter: '#d4484f',
      default: '#E50914',
    },
    background: {
      lighter: '#FFFFFF',
      default: '#FFFFFF',
    },
    error: {
      lighter: '#d4484f',
      default: '#E50914',
    },
  },
};
export default theme;
