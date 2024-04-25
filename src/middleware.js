import { NextResponse } from 'next/server';

export default function middleware(request) {
  if (!request.nextUrl.pathname.startsWith('/_next/')) {
    const queryParams = Object.assign({}, ...((request.url.split('?')[1] ?? '').split('&') ?? []).map((param) => ({ [param.split('=')[0]]: param.split('=')[1] })));
    if (request.nextUrl.pathname === '/output' && (!queryParams.first_name || !queryParams.last_name)) {
      return NextResponse.redirect(new URL('/input', request.url));
    }
  }
}
