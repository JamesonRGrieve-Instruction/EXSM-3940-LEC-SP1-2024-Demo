import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function POST(request) {
  const session = await getSession({ request });
  const body = await request.json();

  // if (session) {
  const result = await prisma.post.create({
    data: {
      ...body,
      author: { connect: { email: session.user.email } },
    },
  });
  return NextResponse.json(result, { status: 201 });
}

export async function GET(request) {
  const id = request.nextUrl.searchParams.get('id');
  const result = await prisma.post.findUnique({
    where: { id: parseInt(id) },
    include: { author: true },
  });
  return NextResponse.json(result);
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  const result = await prisma.post.delete({
    where: { id: parseInt(id) },
  });
  return NextResponse.json(result);
}

export async function PATCH(request) {
  const id = request.nextUrl.searchParams.get('id');
  const body = await request.json();
  const result = await prisma.post.update({
    where: { id: parseInt(id) },
    data: body,
  });
  return NextResponse.json(result);
}
