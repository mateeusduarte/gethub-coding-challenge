import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;

export const SearchContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const MoviesContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 20px;
  overflow: auto;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  max-height: 400px;
`;
