import { NextRequest, NextResponse } from 'next/server';
import { connectMongoDB } from '@/libs/mongodb';
import Publication from '@/models/publication';

// get by id
export async function GET(request: NextRequest) {
  try {
    const { id } = await request.json();

    await connectMongoDB();
    const publication = await Publication.findById(id);

    if (!publication) {
      return NextResponse.json('Publication not found', { status: 404 });
    }

    return NextResponse.json(publication, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error getting publication' },
      { status: 500 }
    );
  }
}

// delete
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    await connectMongoDB();
    const publication = await Publication.findByIdAndDelete(id);

    if (!publication) {
      return NextResponse.json('Publication not found', { status: 404 });
    }

    return NextResponse.json(publication, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error getting publication' },
      { status: 500 }
    );
  }
}

// delete
export async function PUT(request: NextRequest) {
  try {
    const { id, title } = await request.json();

    await connectMongoDB();
    const publication = await Publication.findByIdAndUpdate(id, { title });

    if (!publication) {
      return NextResponse.json('Publication not found', { status: 404 });
    }

    return NextResponse.json(publication, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error getting publication' },
      { status: 500 }
    );
  }
}
