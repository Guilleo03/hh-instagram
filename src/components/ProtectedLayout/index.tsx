'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, ReactNode } from 'react';
import { Flex, Loader } from '@mantine/core';

type Props = {
  children: ReactNode;
};

const ProtectedLayout = ({ children }: Props) => {
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') redirect('/sign-in');
    console.log(status);
  }, [status]);

  return (
    <>
      {status === 'authenticated' && <>{children}</>}{' '}
      {status === 'loading' && (
        <Flex h={'100vh'} w={'100%'} align={'center'} justify={'center'}>
          <Loader />
        </Flex>
      )}
    </>
  );
};

export default ProtectedLayout;
