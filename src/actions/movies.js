import Movie from '../services/api/Movie';

export const REQUEST = 'REQUEST';
export const RECEIVER_MOVIES_LIST = 'RECEIVER_MOVIES_LIST';
export const RECEIVER_MOVIES_LIST_ERROR = 'RECEIVER_MOVIES_LIST_ERROR';
export const RECEIVER_MOVIE_ITEM = 'RECEIVER_MOVIE_ITEM';

export const startRequest = () => ({
  type: REQUEST,
});

export const movieList = movies => ({
  type: RECEIVER_MOVIES_LIST,
  movies,
});

export const movieListError = error => ({
  type: RECEIVER_MOVIES_LIST_ERROR,
  isError: true,
  error,
});

export const movieItem = movie => ({
  type: RECEIVER_MOVIE_ITEM,
  movie,
});

export const getMoviesList = (movie, numberPage) => (dispatch) => {
  dispatch(startRequest());
  Movie.searchMovieList(movie, numberPage)
    .then(response => dispatch(movieList(response)))
    .catch(error => dispatch(movieListError({ error })));
};
export const getMovieItem = idImdb => (dispatch) => {
  dispatch(startRequest());
  Movie.searchMovieItem(idImdb)
    .then(response => dispatch(movieItem(response)))
    .catch(error => dispatch(movieListError({ error })));
};

