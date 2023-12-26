import { Button as ModalButton } from '@mantine/core';
import { ReactNode } from 'react';

type Props = {
  onClick: () => void;
  children: ReactNode;
};

const Button = ({ onClick, children }: Props) => {
  return (
    <ModalButton
      onClick={onClick}
      variant="gradient"
      gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
      {children}
    </ModalButton>
  );
};

export default Button;
