'use client';

import type { Publication } from '@/types/types';
import PublicationFeed from '../PublicationFeed';
import styles from './Feed.module.scss';
import { Box } from '@mantine/core';
import Masonry from 'react-responsive-masonry';

type Props = {
  publications: Publication[];
};

const Feed = ({ publications }: Props) => {
  return (
    <>
      <Box className={styles.root}>
        {publications.map(item => (
          <PublicationFeed
            key={item.id}
            publication={item}
            className={styles.publication}
          />
        ))}
      </Box>
    </>
  );
};

export default Feed;
