import styled from 'styled-components';

import { TButtonContainerProps } from './types';

export const ButtonContainer = styled.button<TButtonContainerProps>`
  :hover {
    background-color: ${({ theme: { palette }, mode }) =>
      mode === 'contained' ? palette.primary.lighter : 'transparent'};
    color: ${({ theme: { palette, grayScale }, mode }) =>
      mode === 'contained' ? grayScale.gray100 : palette.primary.lighter};
    border: ${({ theme: { palette }, mode }) =>
      mode === 'outlined'
        ? `2px solid ${palette.primary.lighter}`
        : 'transparent'};
  }
  padding: ${({ theme: { spacing } }) => `0 ${spacing.xxs}px`};
  border-radius: ${({ theme: { spacing } }) => spacing.xxxs}px;

  background-color: ${({ theme: { palette }, mode }) =>
    mode === 'contained' ? palette.primary.default : 'transparent'};
  border: ${({ theme: { palette }, mode }) =>
    mode === 'outlined'
      ? `2px solid ${palette.primary.default}`
      : 'transparent'};
  width: ${({ fullWidth }) => !!fullWidth && '100%'};
  color: ${({ theme: { palette, grayScale }, mode }) =>
    mode === 'contained' ? grayScale.gray100 : palette.primary.default};
  height: ${({ theme: { spacing } }) => spacing.xl}px;
  cursor: pointer;
  font-size: ${({ theme: { fontSize } }) => fontSize.sm}px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};
`;
