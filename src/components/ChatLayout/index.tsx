'use client';

import ChatList from '@/components/ChatList';
import ChatsOpened from '@/components/ChatsOpened';
import { useState } from 'react';
import type { User } from '@/types/types';

const ChatLayout = () => {
  const [totalChatsOpened, setTotalChatsOpened] = useState<User[]>([]);

  return (
    <>
      <ChatsOpened
        setTotalChatsOpened={setTotalChatsOpened}
        totalChatsOpened={totalChatsOpened}
      />
      <ChatList setTotalChatsOpened={setTotalChatsOpened} />
    </>
  );
};

export default ChatLayout;
