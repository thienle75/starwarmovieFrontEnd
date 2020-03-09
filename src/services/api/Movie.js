import Api, {API_KEY} from '../api';

export default class Movie {
  
  static searchMovieList = (movie, numberPage = 1) => {
    return fetch('https://mysterious-peak-27876.herokuapp.com').then(response => response.json)
      .catch(error => error);
  }
  static searchMovieItem = (id) => {
    return Api.get('', {
      params: {
        apikey: API_KEY,
        i: id
      }
    }).then(response => response.data)
      .catch(error => error);
  }
}