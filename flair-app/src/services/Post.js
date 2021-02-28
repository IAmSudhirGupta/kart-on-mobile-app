import axios from 'axios';
import {POST_URL} from './ApiConfig';

export const getPosts = () => {
  return axios.get(POST_URL);
};
