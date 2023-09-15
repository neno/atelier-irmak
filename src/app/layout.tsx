import './globals.css';
import { Raleway } from 'next/font/google';
import { Footer } from '@/ui/Footer';
import { Nav } from '@/ui/nav/Nav';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL as string)
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang='de'>
      <head />
      <body className={raleway.className}>
        <div className="hidden">
          {process.env.NEXT_PUBLIC_VERCEL_URL}
        </div>
        <Nav />
        <main className='relative z-10'>{children}</main>
        <Footer />
        <div id='overlay'></div>
      </body>
    </html>
  );
}
