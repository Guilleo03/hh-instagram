import { Button, Group } from '@mantine/core';

type Props = {
  isLoading: boolean;
  onClose: () => void;
};

const FormActions = ({ isLoading, onClose }: Props) => {
  return (
    <Group justify="center" mt="xl">
      <Button onClick={() => onClose()} variant="default">
        Cancel
      </Button>
      <Button type="submit" loading={isLoading}>
        Upload photo
      </Button>
    </Group>
  );
};

export default FormActions;
