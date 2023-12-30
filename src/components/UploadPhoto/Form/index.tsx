import { Box } from '@mantine/core';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import type { FormUploadPhoto } from '@/types/types';
import FormActions from './FormActions';
import Content from './Content';
import { useState } from 'react';
import { showNotification } from '@/utils/utils';

const Form = () => {
  const methods = useForm<FormUploadPhoto>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormUploadPhoto> = async (data, e) => {
    e?.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', data.file[0]);
      formData.append('title', data.title);

      await fetch('/api/publication', {
        method: 'POST',
        body: formData,
      });

      console.log('image uploaded');
      showNotification('Publication uploaded succesfully');
    } catch (error) {
      console.log(error);
      showNotification('An error ocurred uploading the publication', '', true);
    } finally {
      setIsLoading(false);
    }
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
