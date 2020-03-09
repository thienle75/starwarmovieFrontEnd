import { REQUEST, RECEIVER_MOVIES_LIST_ERROR, RECEIVER_MOVIES_LIST, RECEIVER_MOVIE_ITEM } from '../actions/movies';

const initialState = {
  Response: '',
  Search: null,
  totalResults: '',
  Error: '',
  item: {
    Response: '',
  },
};

function movies(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVER_MOVIES_LIST:
      return {
        ...action.movies,
        isFetching: false,
        item: { ...state.item },
      };
    case RECEIVER_MOVIES_LIST_ERROR:
      return {
        ...action.movies,
        isFetching: false,
        Response: false,
      };
    case RECEIVER_MOVIE_ITEM:
      return {
        ...state,
        item: { ...action.movie },
        isFetching: false,
      };
    default:
      return state;
  }
}

export default movies;
