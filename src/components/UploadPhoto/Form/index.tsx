import { Box } from '@mantine/core';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import type { FormUploadPhoto } from '@/types/types';
import FormActions from './FormActions';
import Content from './Content';
import { useState } from 'react';

const Form = () => {
  const methods = useForm<FormUploadPhoto>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormUploadPhoto> = data => {
    console.log(data);
  };

  return (
    <Box mt={30}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Content />
          <FormActions isLoading={isLoading} />
        </form>
      </FormProvider>
    </Box>
  );
};

export default Form;
