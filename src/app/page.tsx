import Feed from '@/components/Feed';
import publications from '@/mock/publications.json';
import type { Publication } from '@/types/types';

const Home = () => {
  return (
    <div>
      <Feed publications={publications as Publication[]} />
    </div>
  );
};

export default Home;
