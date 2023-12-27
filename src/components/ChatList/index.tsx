'use client';

import {
  Accordion,
  Text,
  Flex,
  List,
  Avatar,
  UnstyledButton,
} from '@mantine/core';
import onlineUsers from '@/mock/onlineUsers.json';
import variables from '@/styles/variables.module.scss';
import { IconChevronUp } from '@tabler/icons-react';

const ChatList = () => {
  const list = onlineUsers.map(item => (
    <List.Item key={item.id} w={'100%'}>
      <UnstyledButton py={15} w={'100%'} className="chatList_item" px={16}>
        <Flex align="center" gap={10}>
          <Avatar size={'sm'} src={item.avatar} alt="Avatar" />
          {item.name}
        </Flex>
      </UnstyledButton>
    </List.Item>
  ));

  return (
    <Accordion
      variant="separated"
      defaultValue="Apples"
      pos="fixed"
      right={0}
      bottom={0}
      w={300}
      chevron={<IconChevronUp />}
      style={{ zIndex: 2 }}>
      <Accordion.Item value="onlineUsers" px={0}>
        <Accordion.Control icon="🟢">
          <Flex align="center" gap={10}>
            Online users <Text c={variables.grey}>12</Text>
          </Flex>
        </Accordion.Control>
        <Accordion.Panel pt={15} px={0}>
          <List listStyleType="none" w={'100%'}>
            {list}
          </List>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default ChatList;
