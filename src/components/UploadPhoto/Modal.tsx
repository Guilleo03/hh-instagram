import { Modal as ModalMantine } from '@mantine/core';

type Props = {
  opened: boolean;
  onClose: () => void;
};

const Modal = ({ opened, onClose }: Props) => {
  return (
    <ModalMantine opened={opened} onClose={onClose} title="Share your photo">
      <p>texto</p>
    </ModalMantine>
  );
};

export default Modal;
