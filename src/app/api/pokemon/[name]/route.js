import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`).catch((error) => error.response);
  return NextResponse.json(result.data, { status: result.status });
}
