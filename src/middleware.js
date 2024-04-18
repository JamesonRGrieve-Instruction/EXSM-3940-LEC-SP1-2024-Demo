import { NextResponse } from 'next/server';

export function middleware(request) {
  // This log will only run on the server, because it is in middleware which the client never sees.
  // The same is true of server-only components (ones without 'use client').
  console.log(request.nextUrl.pathname);
  /* Example of Redirect
  if (request.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  */
}
