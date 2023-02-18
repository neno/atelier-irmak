import clsxm from '@/lib/clsxm';
import { IFlyingCarpet } from '@/schema/types';
import Link from 'next/link';
import { FC } from 'react';
import { RichText } from '../../rich-text/RichText';

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
          className='flex flex-col justify-center w-full h-full '
        />
      </Link>
    </header>
  );
};
