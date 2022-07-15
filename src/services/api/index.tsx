import axios from 'axios';

export const API_URL = 'https://financialmodelingprep.com/api/v3/';

export const API_KEY = '79b639cc05a3a6033f4e9c71233a74fc';

export const API = axios.create({
  baseURL: API_URL,
});
