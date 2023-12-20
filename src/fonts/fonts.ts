import { Italiana, Red_Hat_Display } from 'next/font/google';

export const italiana = Italiana({
  subsets: ['latin'],
  weight: ['400'],
  display: 'block',
  adjustFontFallback: false,
});
export const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'block',
  adjustFontFallback: false,
});
