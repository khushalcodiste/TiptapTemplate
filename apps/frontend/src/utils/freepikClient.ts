import axios from 'axios';

import { FREEPIK_API_KEY } from '@/config';

export const freepikClient = axios.create({
  baseURL: 'https://api.freepik.com/v1',
  headers: {
    'x-freepik-api-key': FREEPIK_API_KEY,
  },
});
