import { Box } from '@mantine/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { FormUploadPhoto } from '@/types/types';
import { ReactNode } from 'react';
import FormActions from './FormActions';

type Props = {
  children: ReactNode;
  isUploadingPublication: boolean;
  isSubmitButton: boolean;
  prevStep: () => void;
  nextStep: () => void;
};

const Form = ({
  children,
  isUploadingPublication,
  isSubmitButton,
  prevStep,
  nextStep,
}: Props) => {
  const { handleSubmit } = useForm<FormUploadPhoto>();

  const onSubmit: SubmitHandler<FormUploadPhoto> = data => {
    console.log(data);
  };

  return (
    <Box mt={30}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
        <FormActions
          isSubmitButton={isSubmitButton}
          isUploadingPublication={isUploadingPublication}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </form>
    </Box>
  );
};

export default Form;
