export default function middleware(request) {
  if (!request.nextUrl.pathname.startsWith('/_next/')) {
    const queryParams = Object.assign(
      {},
      ...request.url
        .split('?')[1]
        .split('&')
        .map((param) => ({ [param.split('=')[0]]: param.split('=')[1] })),
    );
    console.log(queryParams['name']);
    console.log(request.nextUrl.pathname);
  }
}
