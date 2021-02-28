import axios from 'axios';
import {REGISTER_DEVICE_URL} from './ApiConfig';

export const registerDevice = payload => {
  return axios.post(REGISTER_DEVICE_URL, payload);
};
