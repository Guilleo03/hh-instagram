import { Box } from '@mantine/core';

type Props = {
  msg: string;
};

const Message = ({ msg }: Props) => {
  return <Box>{msg}</Box>;
};

export default Message;
