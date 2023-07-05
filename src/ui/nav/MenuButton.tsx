'use client';

import { useAtom } from 'jotai';
import { navAtom } from '@/store/nav-atom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export const MenuButton = () => {
  const [open, setOpen] = useAtom(navAtom);
  return (
    <button
      onClick={() => setOpen(!open)}
      type='button'
      className='lg:hidden ml-4 sm:ml-12 text-primary hover:text-primary-light'
    >
      <span className='sr-only'>Open main menu</span>
      {open ? (
        <XMarkIcon className='block h-10 w-10' aria-hidden='true' />
      ) : (
        <Bars3Icon className='block h-10 w-10' aria-hidden='true' />
      )}
    </button>
  );
};
