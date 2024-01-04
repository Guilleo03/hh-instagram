'use client';

import Masonry from 'react-responsive-masonry';
import styles from './Feed.module.scss';
import { Skeleton } from '@mantine/core';

const SkeletonComponent = () => {
  return (
    <Masonry className={styles.root} columnsCount={2} gutter="20px">
      <Skeleton h={200} w={450} radius={'lg'} />
      <Skeleton h={400} w={450} radius={'lg'} />
      <Skeleton h={100} w={450} radius={'lg'} />
      <Skeleton h={300} w={450} radius={'lg'} />
      <Skeleton h={450} w={450} radius={'lg'} />
      <Skeleton h={250} w={450} radius={'lg'} />
      <Skeleton h={300} w={450} radius={'lg'} />
    </Masonry>
  );
};

export default SkeletonComponent;
