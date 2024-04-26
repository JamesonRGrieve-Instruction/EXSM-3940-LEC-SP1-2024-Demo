import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
export async function GET(request) {
  console.log('GET: ', request);
  return NextResponse.json({ detail: 'Response from GET.' }, { status: 200 });
}
export async function POST(request) {
  // Headers can be accessed using the headers() function.
  const requestHeaders = headers();
  //console.log('POST: ', request);
  // A specific header can be accessed using the get() method.
  console.log('POST Auth Header: ', requestHeaders.get('Authorization'));
  // The body of the request can be accessed using the json() method, remember to await.
  console.log('POST Body: ', await request.json());
  return NextResponse.json({ detail: 'Response from POST.' }, { status: 201 });
}
export async function PUT(request) {
  console.log('PUT: ', request);
  return NextResponse.json({ detail: 'Response from PUT.' }, { status: 200 });
}
export async function DELETE(request) {
  console.log('DELETE: ', request);
  return NextResponse.json({ detail: 'Response from DELETE.' }, { status: 200 });
}
// A method that isn't present will trigger a 405.
/*
export async function PATCH(request) {
  console.log('PATCH: ', request);
  return NextResponse.json({ detail: 'Response from PATCH.' }, { status: 200 });
}
*/
