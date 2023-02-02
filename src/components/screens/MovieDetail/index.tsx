import IMovie from '@/common/model/movie.model';
import { TPaginationResult } from '@/common/types/pagination.types';
import LoadingBlock from '@/components/atoms/LoadingBlock';
import Movie from '@/components/molecules/Movie';
import movieService from '@/services/movie.service';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  DataContainer,
  MovieDataContainer,
  MovieDetailContainer,
  MovieImage,
  MoviesContainer,
  MovieSummary,
  MovieTitle,
  SimilarMoviesContainer,
  SimilarMoviesTitle,
} from './styles';

export default function MovieDetail() {
  const [movie, setMovie] = useState<IMovie>();
  const [similarMovies, setSimilarMovies] =
    useState<TPaginationResult<IMovie>>();

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const movieId = router.query.movieId?.toString() || '';

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      try {
        const selectedMovie = await movieService.getById(movieId);
        setMovie(selectedMovie);
        const selectedMovieSimilars = await movieService.getSimilarMovies(
          movieId,
          1
        );
        setSimilarMovies(selectedMovieSimilars);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie();
  }, [movieId]);

  const showMovieInfo = !isLoading && !!movie;
  const showSimilarMovies =
    !!showMovieInfo && !!similarMovies && similarMovies.results.length > 0;
  return (
    <MovieDetailContainer>
      {isLoading && <LoadingBlock size={90} />}
      {showMovieInfo && (
        <>
          <MovieImage
            src={`https://image.tmdb.org/t/p/w400/${movie?.poster_path}`}
          />
          <DataContainer>
            <MovieDataContainer>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieSummary>{movie.overview}</MovieSummary>
            </MovieDataContainer>
            {showSimilarMovies && (
              <SimilarMoviesContainer>
                <SimilarMoviesTitle>Filmes relacionados</SimilarMoviesTitle>
                <MoviesContainer>
                  {similarMovies.results.map((movie, index) => {
                    return (
                      <Movie movie={movie} key={`${movie.id} - ${index}`} />
                    );
                  })}
                </MoviesContainer>
              </SimilarMoviesContainer>
            )}
          </DataContainer>
        </>
      )}
    </MovieDetailContainer>
  );
}
