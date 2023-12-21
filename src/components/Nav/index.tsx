import styles from './Nav.module.scss';
import { Box, Button, UnstyledButton, Flex, Container } from '@mantine/core';
import Logo from '@/components/Logo';

const Nav = () => {
  return (
    <Box component="nav" py={20}>
      <Container>
        <Flex align="center" justify="space-between">
          <Logo />
          <Flex gap={80}>
            <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
              Upload photo
            </Button>
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
