import { NextRequest, NextResponse } from 'next/server';

import { AUTH_TOKEN } from '@/constants';

// Limit the middleware to following paths
export const config = {
  matcher: [
    '/presentations/:path*',
    '/generateFromText',
    '/generateFromTopic',
    '/generateFromFile',
    '/ppt/:path*',
    '/collection',
    '/profile',
    '/workspace',
  ],
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get(AUTH_TOKEN);

  // Exclude '/ppt/public/:path' from middleware
  if (request.nextUrl.pathname.startsWith('/ppt/public/')) {
    return NextResponse.next();
  }

  if (!token) return NextResponse.redirect(new URL('/login', request.url));

  return NextResponse.next();
}
