export default function middleware(request) {
  if (!request.nextUrl.pathname.startsWith('/_next/')) {
    console.log(request.nextUrl.pathname);
  }
}
