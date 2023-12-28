'use client';

import { useEffect } from 'react';
import GoogleButton from '@/components/GoogleButton';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Page = () => {
  const { status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') redirect('/');
  }, [status]);

  return (
    <div>
      <GoogleButton />
    </div>
  );
};

export default Page;
