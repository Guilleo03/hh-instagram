import { Box } from '@mantine/core';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import type { FormUploadPhoto } from '@/types/types';
import FormActions from './FormActions';
import Content from './Content';
import { useState } from 'react';
import { showNotification } from '@/utils/utils';

function getBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const base64String = reader.result;
        resolve(base64String);
      } else {
        reject(new Error('Failed to convert image to base64'));
      }
    };

    reader.onerror = () => {
      reject(new Error('Error reading the image file'));
    };

    reader.readAsDataURL(file);
  });
}

const Form = () => {
  const methods = useForm<FormUploadPhoto>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormUploadPhoto> = async (data, e) => {
    e?.preventDefault();
    setIsLoading(true);

    const imgBase64 = await getBase64(data.file[0]);

    try {
      const formData = new FormData();
      formData.append('file', imgBase64);
      formData.append('title', data.title);

      await fetch('/api/publication', {
        method: 'POST',
        body: formData,
      });

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
