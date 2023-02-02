import IMovie from '@/common/model/movie.model';
import { TPaginationResult } from '@/common/types/pagination.types';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import LoadingBlock from '@/components/atoms/LoadingBlock';
import movieService from '@/services/movie.service';
import { useState } from 'react';
import Movie from '../../molecules/Movie';
import { HomeContainer, MoviesContainer, SearchContainer } from './styles';

export default function Home() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<TPaginationResult<IMovie>>();
  const [isLoading, setIsLoading] = useState(false);

  const searchForMovie = async () => {
    setIsLoading(true);
    try {
      const movies = await movieService.search(search, page);
      setMovies(movies);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchMovies = () => {
    setPage(1);
    searchForMovie();
  };
  const handleShowMore = () => {
    setPage(page + 1);
    searchForMovie();
  };
  const showMovies =
    !!movies?.results && movies?.results.length > 0 && !isLoading;
  const showSeeMore = showMovies && movies.page < movies.total_pages;
  return (
    <HomeContainer>
      <SearchContainer>
        <Input
          placeholder="Qual filme você está buscando?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearchMovies}>
          {isLoading ? <LoadingBlock /> : 'Buscar'}
        </Button>
      </SearchContainer>
      <MoviesContainer>
        {isLoading ? <LoadingBlock size={50} /> : 'Buscar'}
        {showMovies &&
          movies.results.map((movie, index) => {
            return <Movie movie={movie} key={`${movie.id} - ${index}`} />;
          })}
      </MoviesContainer>
      {showSeeMore && (
        <div>
          <Button onClick={() => handleShowMore()} mode="text">
            veja mais
          </Button>
        </div>
      )}
    </HomeContainer>
  );
}
