import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

const StyleProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StyleProvider;
