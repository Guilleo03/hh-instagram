import { NextRequest, NextResponse } from 'next/server';
import { connectMongoDB } from '@/libs/mongodb';
import User from '@/models/user';

export async function POST(request: NextRequest) {
  const { name, email, image, id } = await request.json();
  await connectMongoDB();
  await User.create({ name, email, image, id });
  return NextResponse.json({ message: 'User registered' }, { status: 201 });
}
