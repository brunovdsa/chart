import axios from 'axios';

export const API_URL = 'https://financialmodelingprep.com/api/v3/';

export const API_KEY = '74227fac2dfdddf30f78919df11802d0';

export const API = axios.create({
  baseURL: API_URL,
});
