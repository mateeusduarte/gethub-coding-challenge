import api from '@/common/http/api';
import IMovie from '@/common/model/movie.model';
import { TPaginationResult } from '@/common/types/pagination.types';

class MovieService {
  private BASE_URL = 'movie';
  private API_KEY = process.env.API_KEY;

  async search(name: string, page: number): Promise<TPaginationResult<IMovie>> {
    const movies = await api.get(
      `search/${this.BASE_URL}?api_key=${this.API_KEY}&language=pt-BR&query=${name}&page=${page}&include_adult=true`
    );
    return movies.data;
  }

  async getSimilarMovies(
    movieId: string,
    page: number
  ): Promise<TPaginationResult<IMovie>> {
    const movies = await api.get(
      `${this.BASE_URL}/${movieId}/similar?api_key=${this.API_KEY}&language=pt-BRpage=${page}`
    );
    return movies.data;
  }
}

const movieService = new MovieService();

export default movieService;
