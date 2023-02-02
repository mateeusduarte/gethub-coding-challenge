import api from '@/common/http/api';
import IMovie from '@/common/model/movie.model';
import { TPaginationResult } from '@/common/types/pagination.types';

class MovieService {
  private BASE_URL = 'movie';
  private API_KEY = '5694325f102bda4c1b80a82da9f616ea';

  async search(name: string, page: number): Promise<TPaginationResult<IMovie>> {
    const movies = await api.get(
      `search/${this.BASE_URL}?api_key=${this.API_KEY}&language=pt-BR&query=${name}&page=${page}&include_adult=true`
    );
    return movies.data;
  }

  async getById(movieId: string): Promise<IMovie> {
    const movie = await api.get(
      `${this.BASE_URL}/${movieId}?api_key=${this.API_KEY}&language=pt-BR`
    );
    return movie.data;
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
