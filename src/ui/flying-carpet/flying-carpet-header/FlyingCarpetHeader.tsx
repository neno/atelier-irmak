import clsxm from '@/lib/clsxm';
import { IFlyingCarpet } from '@/schema/types';
import Link from 'next/link';
import { FC } from 'react';
import { RichText } from '../../rich-text/RichText';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

<svg
  xmlns='http://www.w3.org/2000/svg'
  fill='none'
  viewBox='0 0 24 24'
  strokeWidth={1.5}
  stroke='currentColor'
  className='w-6 h-6'
>
  <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  />
</svg>;

import styles from './FlyingCarpetHeader.module.css';

export const FlyingCarpetHeader: FC<
  Pick<IFlyingCarpet, 'template' | 'text' | 'link'>
> = ({ template, link, text }) => {
  const path = `/referenzen/${link.slug}`;
  return (
    <header className={clsxm(styles[`txt--${template}`])}>
      <Link href={path} className={styles.link}>
        <RichText
          content={text}
          className='flex flex-col flex-1 justify-between w-full h-full '
        />
        <div className='flex justify-end'>
          <ArrowRightCircleIcon className='block h-8 w-8 text-white' />
        </div>
      </Link>
    </header>
  );
};
