import { NextResponse } from 'next/server';

export default function middleware(request) {
  console.log(request.nextUrl);
  if (request.nextUrl.pathname.split('/').includes('render-slug') && request.nextUrl.href.toLowerCase() !== request.nextUrl.href) {
    return NextResponse.redirect(request.nextUrl.href.toLowerCase());
  } else return NextResponse.next();
}
