interface IMovie {
  id: string;

  release_date: string;

  title: string;

  backdrop_path: string | null;

  overview: string;
}

export default IMovie;
