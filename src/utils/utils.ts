import { notifications } from '@mantine/notifications';

export const showNotification = (
  title: string,
  message?: string,
  error?: boolean
) => {
  notifications.show({
    title: title,
    message: message || '',
    withCloseButton: true,
    autoClose: 5000,
    color: error ? 'red' : 'green',
  });
};
