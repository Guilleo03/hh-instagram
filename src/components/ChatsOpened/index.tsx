import { Box, Flex } from '@mantine/core';
import Chat from '@/components/Chat';
import onlineUsers from '@/mock/onlineUsers.json';

const ChatsOpened = () => {
  const { avatar, id, name } = onlineUsers[0];
  const { avatar: avatar1, id: id1, name: name1 } = onlineUsers[1];

  return (
    <Box pos="fixed" bottom={0} right={300} style={{ zIndex: 2 }}>
      <Flex>
        <Box pos={'relative'} right={350}>
          <Chat avatar={avatar} id={id} name={name} />
        </Box>
        <Box pos={'relative'} right={700}>
          <Chat avatar={avatar1} id={id1} name={name1} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ChatsOpened;
