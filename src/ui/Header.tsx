import Link from 'next/link';
import { FC } from 'react';
import { Container } from './Container';
import { Logo } from './Logo';

interface HeaderProps {
  children: React.ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <Container className='py-8 text-primary-dark bg-white flex items-center justify-between'>
      <Link href='/'>
        <Logo />
      </Link>
      {children}
    </Container>
  );
};
