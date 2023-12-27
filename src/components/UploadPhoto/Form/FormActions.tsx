import { Button, Group, Box } from '@mantine/core';
import { Progress as Loader } from '@mantine/core';

type Props = {
  isLoading: boolean;
};

const FormActions = ({ isLoading }: Props) => {
  return (
    <>
      {isLoading ? (
        <Box p={50} mt={20}>
          <Loader radius="xl" value={100} striped animated />
        </Box>
      ) : (
        <Group justify="center" mt="xl">
          <Button variant="default">Cancel</Button>
          <Button type="submit">Upload photo</Button>
        </Group>
      )}
    </>
  );
};

export default FormActions;
