import { NextResponse } from 'next/server';

export async function POST(request) {
  const formData = await request.formData();
  console.log(formData);
  const value = formData.get('name');
  console.log(value);
  console.log(formData.get('slug'));
  if (formData.get('query') !== null) {
    return NextResponse.redirect(`${request.nextUrl}/about?name=${value}`);
  } else {
    return NextResponse.redirect(`${request.nextUrl}/about/${value}`);
  }
}
