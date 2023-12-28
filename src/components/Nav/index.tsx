'use client';

import { Box, UnstyledButton, Flex, Container, Avatar } from '@mantine/core';
import Logo from '@/components/Logo';
import UploadPhoto from '@/components/UploadPhoto';
import { signOut, useSession } from 'next-auth/react';

const Nav = () => {
  const { data } = useSession();
  const firstName = data?.user?.name?.split(' ')[0];

  return (
    <Box component="nav" py={20}>
      <Container>
        <Flex align="center" justify="space-between">
          <Logo />
          <Flex gap={80}>
            <Flex align="center" gap={10}>
              <Avatar src={data?.user?.image} /> {firstName}
            </Flex>
            <UploadPhoto />
            <UnstyledButton onClick={() => signOut()}>
              <Flex align="center" gap={6}>
                Sign out
              </Flex>
            </UnstyledButton>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;
