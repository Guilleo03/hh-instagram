import Dropzone from '@/components/Dropzone';
import Input from '@/components/Input';
import { Box, Space } from '@mantine/core';

const Content = () => {
  return (
    <Box>
      <Dropzone />
      <Space h={10} />
      <Input />
    </Box>
  );
};

export default Content;
