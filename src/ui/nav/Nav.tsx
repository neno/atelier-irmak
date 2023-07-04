'use server';

import { fetchNavigationItems } from '@/api';
import clsxm from '@/lib/clsxm';
import { Container } from '@/ui/Container';
import { Logo } from '@/ui/Logo';
import { CtaLinks } from '@/ui/nav/CtaLinks';
import { NavLink } from '@/ui/nav/NavLink';
import { NavLinkList } from '@/ui/nav/NavLinkList';
import Link from 'next/link';
import { MenuButton } from './MenuButton';
import { NavContainer } from './NavContainer';

export const Nav = async () => {
  const items = await fetchNavigationItems();
  return (
    <NavContainer>
      <Container className='px-0'>
        <nav className={clsxm('lg:h-auto lg:flex items-center')}>
          <div className='flex items-center'>
            <Link href='/' className=''>
              <Logo />
            </Link>
            <div className='flex gap-4 md:gap-6 ml-auto lg:hidden'>
              <CtaLinks />
            </div>
            <MenuButton />
          </div>
          <NavLinkList>
            {items &&
              items.map(({ title, page }) => (
                <li key={title} className={clsxm('mt-4 lg:px-4 lg:mt-0')}>
                  <NavLink href={`/${page?.slug}`}>{title}</NavLink>
                </li>
              ))}
          </NavLinkList>
          <div className='gap-4 ml-8 hidden lg:flex'>
            <CtaLinks />
          </div>
        </nav>
      </Container>
    </NavContainer>
  );
};
