import { ILink } from '@/schema/types';
import Link from 'next/link';
import { FC } from 'react';

interface NavProps {
  items: ILink[];
}

export const Nav: FC<NavProps> = ({ items }) => {
  return (
    <nav className='invisible md:visible'>
      <ul className='list-none flex font-title text-lg lg:text-xl xl:text-2xl'>
        {items.map(({ title, page, externalUrl }) => (
          <li key={title}>
            <Link href={`${page?.slug ?? externalUrl}`} className='py-4 pl-8'>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
