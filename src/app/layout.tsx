import type { Metadata } from 'next';
import { MantineProvider, ColorSchemeScript, Container } from '@mantine/core';
import '@/styles/globals.scss';
import Nav from '@/components/Nav';
// import { redHatDisplay } from '@/fonts/fonts';

export const metadata: Metadata = {
  title: 'hh Instagram',
  description: 'hh Instagram with S3 and chat real-time',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&family=Red+Hat+Display:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <ColorSchemeScript />
      </head>
      <body suppressHydrationWarning>
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
          <Nav />
          <Container>{children}</Container>
        </MantineProvider>
      </body>
    </html>
  );
}
