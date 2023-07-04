'use client';

import clsxm from '@/lib/clsxm';
import { navIsOpenAtom } from '@/store/nav-atom';
import { useAtom } from 'jotai';
import { FC, ReactNode } from 'react';

interface NavLinkListProps {
  children: ReactNode;
}

export const NavLinkList: FC<NavLinkListProps> = ({ children }) => {
  const [open] = useAtom(navIsOpenAtom);
  return (
    <ul className={clsxm({ hidden: !open }, 'lg:flex lg:ml-auto')}>
      {children}
    </ul>
  );
};
