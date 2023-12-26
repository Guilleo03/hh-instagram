'use client';

import { Box, Button, UnstyledButton, Flex, Container } from '@mantine/core';
import Logo from '@/components/Logo';
import { useContext } from '@/store';
import UploadPhoto from '@/components/UploadPhoto';

const Nav = () => {
  return (
    <Box component="nav" py={20}>
      <Container>
        <Flex align="center" justify="space-between">
          <Logo />
          <Flex gap={80}>
            <UploadPhoto />
            <UnstyledButton>
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
