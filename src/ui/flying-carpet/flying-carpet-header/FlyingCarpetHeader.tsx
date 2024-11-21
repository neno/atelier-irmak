import clsxm from '@/lib/clsxm';
import { IFlyingCarpet } from '@/schema/types';
import Link from 'next/link';
import { FC } from 'react';
import { RichText } from '../../rich-text/RichText';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import styles from './FlyingCarpetHeader.module.css';

export const FlyingCarpetHeader: FC<
  Pick<IFlyingCarpet, 'template' | 'text' | 'link' | 'backgroundColor'>
> = ({ template, link, text, backgroundColor }) => {
  

  if (!link) {
    return (
      <header className={clsxm(styles[`txt--${template}`])}>
        <div
          
          className={clsxm(styles.link, styles[`bg--${backgroundColor}`])}
        >
          <RichText
            content={text}
            className='flex flex-col flex-1 justify-between w-full h-full '
          />
          <div className='flex justify-end'>
            <ArrowRightCircleIcon className='block h-8 w-8 text-white' />
          </div>
        </div>
      </header>
    );
  }

  const path = `/referenzen/${link.slug}`; // TODO: Make this dynamic
  return (
    <header className={clsxm(styles[`txt--${template}`])}>
      <Link
        href={path ?? ''}
        className={clsxm(styles.link, styles[`bg--${backgroundColor}`])}
      >
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
