import axios from 'axios';

export const API_URL = 'https://financialmodelingprep.com/api/v3/';

export const API_KEY = '635a6d243960ac5aa66c28b587ac32f1';

export const API = axios.create({
  baseURL: API_URL,
});
