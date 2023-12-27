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
import { IconX } from '@tabler/icons-react';
import colors from '@/styles/exportVariables.module.scss';
import WriteMessage from './WriteMessage';
import { useState, useRef } from 'react';
import Message from './Message';

const Chat = ({ avatar, id, name }: User) => {
  const [messages, setMessages] = useState<string[]>([]);
  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current!.scrollTo({
      top: viewport.current!.scrollHeight + 100,
      behavior: 'smooth',
    });

  return (
    <Accordion
      variant="separated"
      w={350}
      chevron={<IconX />}
      pos={'absolute'}
      bottom={0}>
      <Accordion.Item
        value={id.toString()}
        px={0}
        style={{ border: `1px solid ${colors.lightGrey}` }}>
        <Accordion.Control icon={<Avatar src={avatar} size={'sm'} />}>
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
