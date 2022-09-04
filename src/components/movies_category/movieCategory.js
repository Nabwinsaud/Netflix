const key = process.env.REACT_APP_MOVIE;
export const movieCategory = [
  {
    popular_movies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  },
  {
    trending_movies: `https://api.themoviedb.org/3/trending/all/week?api_key=${key}&language=en-US&page=1`,
  },
  {
    top_rated_movies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  },
];

// export default movieCategory;
