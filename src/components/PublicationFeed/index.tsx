import type { Publication } from '@/types/types';
import Image from 'next/image';
import { Box } from '@mantine/core';
import styles from './Publication.module.scss';

type Props = {
  publication: Publication;
};

const PublicationFeed = ({ publication }: Props) => {
  const { id, photoUrl, title } = publication;
  return (
    <Box className={styles.root}>
      <Image key={id} src={photoUrl} alt={title} layout="fill" />
    </Box>
  );
};

export default PublicationFeed;
