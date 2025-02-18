import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //   console.log(request.nextUrl.pathname);
  // if (request.nextUrl.pathname.startsWith('/services')) {
  //   return NextResponse.redirect(new URL('/contact', request.url));
  // }
  //   return NextResponse.redirect(new URL('/', request.url));
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/services/id',
// };
