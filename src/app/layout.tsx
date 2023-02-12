import './globals.css';
import { Raleway } from '@next/font/google';
import { Footer } from '@/ui/Footer';
import { fetchNavigationItems } from '@/api';
import { Nav } from '@/ui/Nav';

const raleway = Raleway({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = await fetchNavigationItems();

  return (
    <html lang='de'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={raleway.className}>
        {items && <Nav items={items} />}
        <main>{children}</main>
        <Footer />
        <div id='overlay'></div>
      </body>
    </html>
  );
}
