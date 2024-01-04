import Feed from '@/components/Feed';
import type { Publication } from '@/types/types';
import { getPublications } from '@/utils/publications';
import { Suspense } from 'react';
import SkeletonComponent from '@/components/Feed/skeleton';

const Home = async () => {
  const publications = await getPublications();

  return (
    <div>
      <Suspense fallback={<SkeletonComponent />}>
        <Feed publications={publications as Publication[]} />
      </Suspense>
    </div>
  );
};

export default Home;
