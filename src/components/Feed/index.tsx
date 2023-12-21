'use client';

import type { Publication } from '@/types/types';
import PublicationFeed from '../PublicationFeed';
import Masonry from 'react-responsive-masonry';
import styles from './Feed.module.scss';

type Props = {
  publications: Publication[];
};

const Feed = ({ publications }: Props) => {
  return (
    <Masonry className={styles.root} columnsCount={2} gutter="20px">
      {publications.map(item => (
        <PublicationFeed key={item.id} publication={item} />
      ))}
    </Masonry>
  );
};

export default Feed;
