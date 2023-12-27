import { Input } from '@mantine/core';
import { useFormContext } from 'react-hook-form';

const Step2 = () => {
  const { register } = useFormContext();

  return <Input {...register('title')} placeholder="Add your title" />;
};

export default Step2;
