import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Flex, ActionIcon } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';
import { SetStateAction, Dispatch } from 'react';

type Input = {
  message: string;
};

type Props = {
  setMessages: Dispatch<SetStateAction<string[]>>;
  scrollToBottom: () => void;
};

const WriteMessage = ({ setMessages, scrollToBottom }: Props) => {
  const { register, handleSubmit, reset } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = data => {
    setMessages(current => [...current, data.message]);
    reset();
    scrollToBottom();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex align={'center'} gap={15}>
        <Input
          {...register('message', { required: true })}
          w={'100%'}
          placeholder="Write your message..."
        />
        <ActionIcon variant="filled" type="submit">
          <IconSend style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </Flex>
    </form>
  );
};

export default WriteMessage;
