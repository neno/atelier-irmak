import { FC, ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className='text-primary-dark bg-white text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-loose font-light'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
