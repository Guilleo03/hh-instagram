import { NextRequest, NextResponse } from 'next/server';
import { connectMongoDB } from '@/libs/mongodb';
import Publication from '@/models/publication';
import { uploadImage } from '@/utils/publications';

// create
export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();

    const data = await request.formData();
    const image = data.get('file') as string;
    const title = data.get('title');

    if (!image) {
      return NextResponse.json('Error uploading image', { status: 400 });
    }

    const imageUploaded = await uploadImage(image);
    const imageUploadedUrl = imageUploaded.secure_url;
    await Publication.create({ title, image: imageUploadedUrl });
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
