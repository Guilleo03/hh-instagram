import { Button, Group, Box } from '@mantine/core';
import { Progress as Loader } from '@mantine/core';

type Props = {
  isUploadingPublication: boolean;
  isSubmitButton: boolean;
  prevStep: () => void;
  nextStep: () => void;
};

const FormActions = ({
  isUploadingPublication,
  isSubmitButton,
  prevStep,
  nextStep,
}: Props) => {
  return (
    <>
      {isUploadingPublication ? (
        <Box p={50} mt={20}>
          <Loader radius="xl" value={100} striped animated />
        </Box>
      ) : (
        <Group justify="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button
            onClick={nextStep}
            type={isSubmitButton ? 'submit' : 'button'}>
            {isSubmitButton ? 'Upload photo' : 'Next step'}
          </Button>
        </Group>
      )}
    </>
  );
};

export default FormActions;
