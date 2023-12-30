import cloudinary from '@/utils/cloudinary';
import path from 'path';
import { promises } from 'fs';

// upload image to Cloudinary
export const uploadImage = async (imagePath: string) => {
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: 'publications',
    });
    return result;
  } catch (error) {
    throw new Error('Error uploading image to Cloudinary');
  }
};

export const getImagePath = async (
  image: FormDataEntryValue | null
): Promise<string> => {
  if (!image) return '';

  // @ts-ignore
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // @ts-ignore
  const filePath = path.join(process.cwd(), 'public', image.name);
  await promises.writeFile(filePath, buffer);

  return filePath;
};
