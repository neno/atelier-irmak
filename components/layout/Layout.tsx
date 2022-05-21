import { FC, ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='text-dark-blue bg-white text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-loose font-light'>
        {children}
      </main>
      <Footer />
    </>
  );
};
