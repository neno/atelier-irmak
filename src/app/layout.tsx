import './globals.css';
import { Inter, Open_Sans, MuseoModerno, Raleway } from '@next/font/google';
import { Header } from '@/ui/Header';
import { Footer } from '@/ui/Footer';
import { fetchNavigationItems } from '@/api';
import { Nav } from '@/ui/Nav';

const inter = Inter();
const openSans = Open_Sans();
const museo = MuseoModerno();
const raleway = Raleway();

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
        <Header>{items && <Nav items={items} />}</Header>
        <main>{children}</main>
        <Footer />
        <div id='overlay'></div>
      </body>
    </html>
  );
}
