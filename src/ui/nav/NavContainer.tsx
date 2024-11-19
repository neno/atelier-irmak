'use client';

import clsxm from '@/lib/clsxm';
import { navIsOpenAtom } from '@/store/nav-atom';
import { useAtom } from 'jotai';
import { FC, ReactNode } from 'react';

interface NavContainerProps {
  children: ReactNode;
}

export const NavContainer: FC<NavContainerProps> = ({ children }) => {
  const [open] = useAtom(navIsOpenAtom);
  return (
    <div
      className={clsxm(
        'fixed top-0 left-0 w-screen h-auto p-4 z-20 bg-white bg-opacity-90 shadow-lg',
        'lg:static lg:shadow-none lg:z-auto',
        {
          'h-screen lg:h-auto bg-opacity-100': open,
        }
      )}
    >
      {children}
    </div>
  );
};
