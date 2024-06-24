import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NavBar } from './_components/nav-bar';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Doe',
  description: 'Creating bugs',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='mt-10'></div>
          <div className='sticky top-2 z-10 w-full bg-transparent bg-opacity-0'>
            <Card className='backdrop-blur-safari mx-auto flex w-[90%] items-center justify-center bg-transparent bg-opacity-0 backdrop-blur lg:max-w-3xl'>
              <CardContent className='z-100 flex items-center p-2'>
                <NavBar />
              </CardContent>
            </Card>
          </div>
          <div className='mx-auto mt-2 w-full lg:max-w-2xl'>
            <div className='mt-2'>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
