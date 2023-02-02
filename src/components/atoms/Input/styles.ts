import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: ${({ theme: { spacing } }) => spacing.quarck}px;
`;
export const NativeInput = styled.input`
  background: transparent;
  color: white;
  height: ${({ theme: { spacing } }) => spacing.xl}px;
  border-radius: ${({ theme: { spacing } }) => spacing.xxxs}px;
  padding-left: ${({ theme: { spacing } }) => spacing.xxxs}px;
  padding-right: ${({ theme: { spacing } }) => spacing.xxxs}px;
  border: 1px solid ${({ theme: { grayScale } }) => grayScale.gray600};
  &:focus-within {
    border: ${({ theme: { palette } }) =>
      `2px solid ${palette.primary.default}`};
    outline: none;
    ::placeholder {
      color: white;
    }
  }
  ::placeholder {
    color: white;
  }
`;

export const ErrorText = styled.p`
  color: ${({ theme: { palette } }) => palette.error.default};
`;
