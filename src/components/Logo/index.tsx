import styles from './Logo.module.scss';
import { Title } from '@mantine/core';
import Link from 'next/link';
import cn from 'clsx';

type Props = {
  color?: 'light' | 'dark';
  size?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Logo = ({ color = 'dark', size = 1 }: Props) => {
  const classes = cn([
    color === 'dark' && styles.dark,
    color === 'light' && styles.light,
  ]);

  return (
    <Link href="/" className={cn(styles.root, classes)}>
      <Title order={size}>My Instagram</Title>
    </Link>
  );
};

export default Logo;
