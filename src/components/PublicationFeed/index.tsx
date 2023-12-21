import type { Publication } from '@/types/types';
import Image from 'next/image';
import { Box } from '@mantine/core';

type Props = {
  publication: Publication;
  className: string;
};

const PublicationFeed = ({ publication, className }: Props) => {
  const { id, photoUrl, title } = publication;
  return (
    <Box className={className}>
      <Image key={id} src={photoUrl} alt={title} layout="fill" />
    </Box>
  );
};

export default PublicationFeed;
