import { NextResponse } from 'next/server';
export async function POST(request) {
  console.log(request.nextUrl);
  const formData = await request.formData();
  const argument = formData.get('argument').replaceAll(' ', '-').replaceAll('_', '-').toLowerCase();
  if (formData.get('slug')) {
    return NextResponse.redirect(`${request.nextUrl.origin}/render-slug/${argument}`);
  } else if (formData.get('override')) {
    return NextResponse.redirect(`${request.nextUrl.origin}/render-slug/${argument}/override`);
  } else if (formData.get('query')) {
    return NextResponse.redirect(`${request.nextUrl.origin}/render-query?query=${argument}`);
  }
}
