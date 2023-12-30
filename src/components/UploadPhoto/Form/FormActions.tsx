import { Button, Group } from '@mantine/core';

type Props = {
  isLoading: boolean;
};

const FormActions = ({ isLoading }: Props) => {
  return (
    <Group justify="center" mt="xl">
      <Button variant="default">Cancel</Button>
      <Button type="submit" loading={isLoading}>
        Upload photo
      </Button>
    </Group>
  );
};

export default FormActions;
