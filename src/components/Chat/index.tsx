'use client';

import {
  Box,
  Avatar,
  Flex,
  ScrollArea,
  Accordion,
  Divider,
} from '@mantine/core';
import type { User } from '@/types/types';
import colors from '@/styles/exportVariables.module.scss';
import WriteMessage from './WriteMessage';
import { useState, useRef, Dispatch, SetStateAction } from 'react';
import Message from './Message';
import { CloseButton } from '@mantine/core';

type Props = {
  setTotalChatsOpened: Dispatch<SetStateAction<User[]>>;
  user: User;
};

const Chat = ({ setTotalChatsOpened, user }: Props) => {
  const [messages, setMessages] = useState<string[]>([]);
  const viewport = useRef<HTMLDivElement>(null);

  const { image, id, name } = user;

  const scrollToBottom = () =>
    viewport.current!.scrollTo({
      top: viewport.current!.scrollHeight,
      behavior: 'smooth',
    });

  const handleCloseChat = (id: string) => {
    setTotalChatsOpened(current => current.filter(user => user.id != id));
  };

  return (
    <Accordion
      defaultValue={id.toString()}
      variant="separated"
      w={350}
      chevron={<CloseButton onClick={() => handleCloseChat(id as string)} />}
      pos={'absolute'}
      bottom={0}>
      <Accordion.Item
        value={id.toString()}
        px={0}
        style={{ border: `1px solid ${colors.lightGrey}` }}>
        <Accordion.Control icon={<Avatar src={image} size={'sm'} />}>
          <Flex align="center" gap={20}>
            {name}
          </Flex>
        </Accordion.Control>
        <Accordion.Panel px={15} pb={15}>
          <Divider />
          <ScrollArea pt={15} h={350} mb={10} viewportRef={viewport}>
            <Box>
              {messages.length > 0 &&
                messages.map((item, i) => <Message key={i} msg={item} />)}
            </Box>
          </ScrollArea>
          <WriteMessage
            setMessages={setMessages}
            scrollToBottom={scrollToBottom}
          />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default Chat;
