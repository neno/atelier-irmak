import './globals.css';
import { Raleway } from "next/font/google";
import { Footer } from '@/ui/Footer';
import { fetchNavigationItems } from '@/api';
import { Nav } from '@/ui/Nav';
import {createMetadata} from "@/lib/helpers";

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = createMetadata(
  'Atelier Irmak | Die Referenz in Bern für Teppiche & Kelims. Seit 1985.',
  'Entdecken Sie Atelier Irmak, Ihr Fachgeschäft für Teppichrestauration und Webkunst in Bern seit 1985. Besuchen Sie uns für hochwertige Teppiche, Kelims und mehr. Beratung inklusive!',
  process.env.SITE_URL,
  `${process.env.SITE_URL}/images/og.png`,
  new URL(process.env.SITE_URL as string),
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = await fetchNavigationItems();

  return (
    <html lang='de'>
      <head />
      <body className={raleway.className}>
        {items && <Nav items={items} />}
        <main className='relative z-10'>{children}</main>
        <Footer />
        <div id='overlay'></div>
      </body>
    </html>
  );
}
