'use client';

import {
  Accordion,
  Text,
  Flex,
  List,
  Avatar,
  UnstyledButton,
  ScrollArea,
} from '@mantine/core';
import onlineUsers from '@/mock/onlineUsers.json';
import variables from '@/styles/exportVariables.module.scss';
import { IconChevronUp } from '@tabler/icons-react';
import { SetStateAction, Dispatch } from 'react';
import type { User } from '@/types/types';

type Props = {
  setTotalChatsOpened: Dispatch<SetStateAction<User[]>>;
};

const ChatList = ({ setTotalChatsOpened }: Props) => {
  const handleOpenChat = (user: User) => {
    setTotalChatsOpened(current => [...current, user]);
  };

  const list = onlineUsers.map(user => (
    <List.Item key={user.id} w={'100%'}>
      <UnstyledButton
        py={15}
        w={'100%'}
        className="chatList_item"
        px={16}
        onClick={() => handleOpenChat(user)}>
        <Flex align="center" gap={10}>
          <Avatar size={'sm'} src={user.avatar} alt="Avatar" />
          {user.name}
        </Flex>
      </UnstyledButton>
    </List.Item>
  ));

  return (
    <Accordion
      variant="separated"
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
          <ScrollArea h={800}>
            <List listStyleType="none" w={'100%'}>
              {list}
            </List>
          </ScrollArea>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default ChatList;
