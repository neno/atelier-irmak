'use client';

import { ILink } from '@/schema/types';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsxm from '@/lib/clsxm';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Container } from './Container';
import { Icon } from '@/ui/icon';
import { IconType } from '@/ui/icon/Icon.types';

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
        'fixed top-0 left-0 w-screen h-auto p-4 z-20 bg-white bg-opacity-90 shadow-sm',
        'lg:static lg:shadow-none lg:z-auto',
        {
          'h-screen lg:h-auto bg-opacity-100': open,
        }
      )}
    >
      <Container className='px-0'>
        <nav className={clsxm('lg:h-auto lg:flex items-center')}>
          <div className='flex items-center'>
            <Link href='/' className=''>
              <Logo />
            </Link>
            <div className='flex gap-4 md:gap-6 ml-auto lg:hidden'>
              <a
                aria-label='Rufen Sie uns an'
                className='hover:text-primary-light'
                href='tel:+41313120604'
              >
                <Icon
                  iconName={IconType.Phone}
                  width={36}
                  height={36}
                  className='md:h-12 md:w-12'
                />
              </a>
              <a
                aria-label='Kontaktieren Sie uns via E-Mail'
                className='hover:text-primary-light'
                href='mailto:info@atelier-irmak.ch'
              >
                <Icon
                  iconName={IconType.Email}
                  width={36}
                  height={36}
                  className='md:h-12 md:w-12'
                />
              </a>
            </div>
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
          </div>
          <ul className={clsxm({ hidden: !open }, 'lg:flex lg:ml-auto')}>
            {items.map(({ title, page }) => (
              <li key={title} className={clsxm('mt-4 lg:px-4 lg:mt-0')}>
                <Link
                  href={`/${page?.slug}`}
                  scroll={true}
                  className={clsxm(
                    'text-xl block lg:text-base p-4 lg:px-0 lg:py-2 border-b-2 border-transparent lg:hover:text-primary-light',
                    pathname?.includes(page?.slug as string) &&
                      'bg-primary text-white lg:bg-transparent lg:!text-primary-dark lg:border-primary-dark'
                  )}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className='gap-4 ml-8 hidden lg:flex'>
            <a className='hover:text-primary-light' href='tel:+41313120604'>
              <Icon iconName={IconType.Phone} width={36} height={36} />
            </a>
            <a
              className='hover:text-primary-light'
              href='mailto:info@atelier-irmak.ch'
            >
              <Icon iconName={IconType.Email} width={36} height={36} />
            </a>
          </div>
        </nav>
      </Container>
    </div>
  );
};
