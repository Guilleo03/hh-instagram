import type { User as UserType } from '@/types/types';
import { connectMongoDB } from '@/libs/mongodb';
import User from '@/models/user';

export const createUser = async (user: UserType): Promise<any> => {
  const { id, name, email, image } = user;
  const res = await fetch('http://localhost:3000/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      name,
      email,
      image,
    }),
  });

  if (res.ok) {
    return Promise.resolve(true);
  } else {
    throw new Error(`Error en la solicitud: ${res.statusText}`);
  }
};

export const isUserRegistered = async (email: string): Promise<boolean> => {
  await connectMongoDB();
  const userExist = await User.findOne({ email });

  return !!userExist;
};
