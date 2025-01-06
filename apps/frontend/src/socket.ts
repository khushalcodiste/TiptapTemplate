'use client';

import { getCookie } from 'cookies-next';
import { io } from 'socket.io-client';

import { AUTH_TOKEN } from '@/constants';

export const socket = io('ws://127.0.0.1:5002', {
  addTrailingSlash: false,
  transports: ['websocket', 'polling'],
  autoConnect: true,
  auth: (cb) => {
    cb({ token: getCookie(AUTH_TOKEN) });
  },
});
