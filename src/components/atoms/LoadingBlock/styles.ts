import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }

`;
export const LoadingSVG = styled.svg`
  animation: ${rotation} 0.5s linear infinite;
  margin: auto;
`;
