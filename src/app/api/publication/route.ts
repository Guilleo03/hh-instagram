import { NextRequest, NextResponse } from 'next/server';
import { connectMongoDB } from '@/libs/mongodb';
import Publication from '@/models/publication';

// create
export async function POST(request: NextRequest) {
  try {
    const { title, image, userId, id } = await request.json();
    await connectMongoDB();
    await Publication.create({ title, image, userId, id });
    return NextResponse.json(
      { message: 'Publication uploaded' },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Error uploading publication' },
      { status: 500 }
    );
  }
}

// get all
export async function GET() {
  try {
    await connectMongoDB();
    const publications = await Publication.find();
    return NextResponse.json(publications, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Error getting publications' },
      { status: 500 }
    );
  }
}
