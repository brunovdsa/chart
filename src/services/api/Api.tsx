import axios from 'axios';

export const API_URL = 'https://financialmodelingprep.com/api/v3/';

export const API_KEY = '74227fac2dfdddf30f78919df11802d0'; //'635a6d243960ac5aa66c28b587ac32f1 79b639cc05a3a6033f4e9c71233a74fc';

export const API = axios.create({
  baseURL: API_URL,
});
