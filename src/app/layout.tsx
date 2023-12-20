import type { Metadata } from 'next';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import '@/styles/globals.scss';
import { redHatDisplay } from '@/fonts/fonts';

export const metadata: Metadata = {
  title: 'My Instagram',
  description: 'My Instagram with S3 and chat real-time',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body suppressHydrationWarning className={redHatDisplay.className}>
        <MantineProvider
          theme={{
            components: {
              Button: {
                styles: {
                  root: { ':active': { transform: 'none' } },
                },
              },
            },
          }}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
