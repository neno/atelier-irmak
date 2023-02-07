import Link from 'next/link';
import {FC} from 'react';
import { Container } from './Container';
import { Logo } from './Logo';

interface HeaderProps {
  children: React.ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <Container className='fixed sm:relative top-0 left-0 z-10 p-4 sm:p-8 text-primary-dark bg-white flex items-center justify-between'>
      <Link href='/'>
        <Logo />
      </Link>
      {children}
    </Container>
  );
};
