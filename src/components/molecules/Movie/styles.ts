import styled from 'styled-components';
import { TMovieCardProps } from './types';

export const MovieCard = styled.div<TMovieCardProps>`
  height: 300px;
  cursor: pointer;

  width: 200px;
  border-radius: ${({ theme: { spacing } }) => spacing.xxxs}px;
  background-color: white;
  background-image: ${({ background }) => `url(${background})`};
  opacity: ${({ hovered }) => (hovered ? 0.2 : 1)};
`;

export const MovieInfoCard = styled.div`
  height: 300px;
  width: 200px;
  cursor: pointer;
  position: absolute;
  border-radius: ${({ theme: { spacing } }) => spacing.xxxs}px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MovieTitle = styled.h4`
  color: white;
`;

export const MovieReleaseDate = styled.p`
  color: white;
`;
