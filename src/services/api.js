import axios from 'axios';

const URL = 'http://www.omdbapi.com/';
const API_KEY = '57ec2f6d';

const api = axios.create({
  baseURL: URL,
  timeout: 10000,
});

export { API_KEY };
export default api;
