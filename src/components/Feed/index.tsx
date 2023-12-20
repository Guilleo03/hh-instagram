import type { Publication } from '@/types/types';
import Image from 'next/image';

type Props = {
  publications: Publication[];
};

const Feed = ({ publications }: Props) => {
  return (
    <div>
      {publications.map(item => (
        <Image
          key={item.id}
          src={item.photoUrl}
          alt={item.title}
          width={200}
          height={400}
        />
      ))}
    </div>
  );
};

export default Feed;
