import styled from 'styled-components';

export const MovieDetailContainer = styled.div`
  display: flex;
  gap: 100px;
  padding: 50px;
`;

export const MovieImage = styled.img`
  height: 600px;
  width: 400px;
  border-radius: ${({ theme: { spacing } }) => spacing.xxxs}px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: space-between;
`;
export const MovieDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const MovieTitle = styled.h1`
  color: white;
`;

export const MovieSummary = styled.p`
  color: white;
`;

export const SimilarMoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const SimilarMoviesTitle = styled.h3`
  color: white;
`;

export const MoviesContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 20px;
  overflow: auto;
  gap: 20px;
  justify-content: center;
  max-height: 320px;
  max-width: 70vw;
`;
