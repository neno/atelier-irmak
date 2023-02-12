'use client';

import { ILink } from '@/schema/types';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsxm from '@/lib/clsxm';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Container } from './Container';

interface NavProps {
  items: ILink[];
}

export const Nav: FC<NavProps> = ({ items }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      className={clsxm(
        'fixed top-0 left-0 w-screen h-auto p-4 z-20 bg-white shadow-sm',
        'lg:static lg:shadow-none lg:z-auto',
        {
          'h-screen lg:h-auto': open,
        }
      )}
    >
      <Container>
        <nav
          className={clsxm('lg:h-auto lg:flex items-center justify-between')}
        >
          <div className='flex items-center justify-between'>
            <Link href='/' className=''>
              <Logo />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              type='button'
              className='lg:hidden'
            >
              <span className='sr-only'>Open main menu</span>
              {open ? (
                <XMarkIcon className='block h-8 w-8' aria-hidden='true' />
              ) : (
                <Bars3Icon className='block h-8 w-8' aria-hidden='true' />
              )}
            </button>
          </div>
          <ul className={clsxm({ hidden: !open }, 'lg:flex')}>
            {items.map(({ title, page }) => (
              <li key={title} className={clsxm('mt-4 lg:px-4 lg:mt-0')}>
                <Link
                  href={`/${page?.slug}`}
                  scroll={true}
                  className={clsxm(
                    'text-xl block lg:text-base p-4 lg:px-0 lg:py-2 border-b-2 border-transparent lg:hover:text-primary-light ',
                    pathname?.includes(page?.slug as string) &&
                      'bg-primary text-white lg:bg-transparent lg:!text-primary-dark lg:border-primary-dark'
                  )}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>
  );
};
