import { Input } from '@mantine/core';
import Form from '@/components/UploadPhoto/Form';

type Props = {
  isUploadingPublication: boolean;
  isSubmitButton: boolean;
  prevStep: () => void;
  nextStep: () => void;
};

const Step2 = ({
  isUploadingPublication,
  isSubmitButton,
  prevStep,
  nextStep,
}: Props) => {
  return (
    <Form
      isSubmitButton={isSubmitButton}
      isUploadingPublication={isUploadingPublication}
      nextStep={nextStep}
      prevStep={prevStep}>
      <Input placeholder="Add your title" />
    </Form>
  );
};

export default Step2;
