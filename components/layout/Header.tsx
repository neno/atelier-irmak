import { Logo } from '@components/logo/Logo';
import { Nav } from '@components/nav/Nav';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <div className='container mx-auto px-2 py-2 text-dark-blue bg-white flex items-center justify-between'>
      <Logo />
      <Nav />
    </div>
  );
};
