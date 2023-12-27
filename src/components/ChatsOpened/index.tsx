import { Box, Flex } from '@mantine/core';
import Chat from '@/components/Chat';
import onlineUsers from '@/mock/onlineUsers.json';
import { Dispatch, SetStateAction } from 'react';
import type { User } from '@/types/types';

type Props = {
  setTotalChatsOpened: Dispatch<SetStateAction<User[]>>;
  totalChatsOpened: User[];
};

const ChatsOpened = ({ setTotalChatsOpened, totalChatsOpened }: Props) => {
  return (
    <Box pos="fixed" bottom={0} right={300} style={{ zIndex: 2 }}>
      <Flex>
        {totalChatsOpened?.length > 0 &&
          totalChatsOpened.map((chat, i) => (
            <Box key={chat.id} pos={'relative'} right={(i + 1) * 350}>
              <Chat user={chat} setTotalChatsOpened={setTotalChatsOpened} />
            </Box>
          ))}
      </Flex>
    </Box>
  );
};

export default ChatsOpened;
