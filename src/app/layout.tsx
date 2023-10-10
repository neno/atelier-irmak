import './globals.css';
import { Raleway } from 'next/font/google';
import { Footer } from '@/ui/Footer';
import { Nav } from '@/ui/nav/Nav';
import clsxm from "@/lib/clsxm";

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
      <body className={clsxm(raleway.className, "flex flex-col min-h-screen")}>
        <Nav />
        <main className='relative z-10 flex-auto'>{children}</main>
        <Footer />
        <div id='overlay'></div>
      </body>
    </html>
  );
}
