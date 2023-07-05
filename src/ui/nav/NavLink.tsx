'use client';

import clsxm from '@/lib/clsxm';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { FC } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const segment = useSelectedLayoutSegment();
  const isActive = href === `/${segment}`;
  return (
    <Link
      href={href}
      scroll={true}
      className={clsxm(
        'text-xl block lg:text-base p-4 lg:px-0 lg:py-2 border-b-2 border-transparent lg:hover:text-primary-light',
        {
          'bg-primary text-white lg:bg-transparent lg:!text-primary-dark lg:border-primary-dark':
            isActive,
        }
      )}
    >
      {children}
    </Link>
  );
};
