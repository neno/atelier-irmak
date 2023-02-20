import { FC } from 'react';
import clsxm from '@/lib/clsxm';
import { Container } from '@/ui/Container';
import { NextImage } from '@/ui/NextImage';
import { RichText } from '@/ui/rich-text/RichText';
import { IFlyingCarpet } from '@/schema/types';

import styles from './FlyingCarpet41.module.css';
import Link from 'next/link';
import { FlyingCarpetHeader } from '../flying-carpet-header/FlyingCarpetHeader';

export const FlyingCarpet41: FC<Omit<IFlyingCarpet, '__typename'>> = ({
  text,
  mediaCollection,
  link,
  template,
  backgroundColor,
}) => {
  return (
    <section className={styles.container}>
      <FlyingCarpetHeader
        template={template}
        text={text}
        link={link}
        backgroundColor={backgroundColor}
      />
      {mediaCollection?.items.map((item, index) => (
        <div key={item.url} className={styles[`img${index + 1}`]}>
          <NextImage
            src={item.url}
            alt={item.description}
            width={item.width}
            height={item.height}
            className='w-full h-full object-cover object-center'
          />
        </div>
      ))}
    </section>
  );
};
