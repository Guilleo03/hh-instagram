import { useDisclosure } from '@mantine/hooks';
import Button from './Button';
import Modal from './Modal';

const Index = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} />
      <Button onClick={open}>Upload photo</Button>
    </>
  );
};

export default Index;
