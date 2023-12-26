import { Modal as ModalMantine, Space } from '@mantine/core';
import Stepper from '@/components/Stepper';

type Props = {
  opened: boolean;
  onClose: () => void;
};

const Modal = ({ opened, onClose }: Props) => {
  return (
    <ModalMantine
      opened={opened}
      onClose={onClose}
      size="auto"
      title="Share your photo"
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      transitionProps={{
        transition: 'fade',
        duration: 200,
        timingFunction: 'ease-in-out',
      }}>
      <Space h={'md'} />
      <Stepper />
    </ModalMantine>
  );
};

export default Modal;
