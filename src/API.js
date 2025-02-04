import axios from 'axios';

export const BaseURL = 'https://staging.roadly.ee';

export default axios.create({
  baseURL: BaseURL,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-store, must-revalidate',
    'Content-Type': 'application/json',
  },
});
