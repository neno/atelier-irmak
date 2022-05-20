import { FC } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className='mx-auto container text-dark-blue bg-white text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-loose font-light'>
        {children}
      </main>
      <Footer />
    </>
  );
};
