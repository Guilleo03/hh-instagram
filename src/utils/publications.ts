import cloudinary from '@/utils/cloudinary';
import { readFile } from 'fs/promises';

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

export const getBase64 = async (file: File): Promise<string> => {
  try {
    // @ts-ignore
    const buffer = await readFile(file.path);
    const base64String = buffer.toString('base64');
    return base64String;
  } catch (error) {
    throw new Error(`Error reading the image file`);
  }
};
