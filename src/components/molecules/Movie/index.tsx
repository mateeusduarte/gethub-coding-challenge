import useHover from '@/common/hooks/use-hover';
import IMovie from '@/common/model/movie.model';
import moment from 'moment';
import { useRouter } from 'next/router';
import {
  MovieCard,
  MovieInfoCard,
  MovieReleaseDate,
  MovieTitle,
} from './styles';

type TMovieProps = {
  movie: IMovie;
};
export default function Movie({ movie }: TMovieProps) {
  const { hover, hoverElement, hoverOutOfElement } = useHover();
  const router = useRouter();
  const handleSelectMovie = () => {
    console.log('ID: ', movie.id);
    router.push(`${movie.id}`);
  };
  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => hoverElement()}
      onMouseLeave={() => hoverOutOfElement()}
      onClick={handleSelectMovie}
    >
      {hover && (
        <MovieInfoCard>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieReleaseDate>
            {moment(movie.release_date).format('DD/MM/YYYY')}
          </MovieReleaseDate>
        </MovieInfoCard>
      )}

      <MovieCard
        background={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        hovered={hover}
      />
    </div>
  );
}
