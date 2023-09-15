import { IAsset } from '@/schema/types';
import { FC } from 'react';
import { Container } from '../Container';
import { NextImage } from '../NextImage';
import { rugTranslations } from 'public/locales/de/rug';

import styles from './DetailHeader.module.css';

interface DetailHeaderProps {
  title: string;
  subtitle: string;
  exhibitedIn: string;
  image: IAsset;
}

export const DetailHeader: FC<DetailHeaderProps> = ({
  title,
  subtitle,
  exhibitedIn,
  image,
}) => {
  const { url, description, height, width } = image;
  return (
    <Container className='px-0'>
      <header className={styles.container}>
        <div className={styles.image}>
          <NextImage
            src={url}
            alt={description}
            width={width}
            height={height}
            priority={true}
            className='w-full h-full object-cover object-center'
          />
        </div>
        <div className={styles.heading}>
          <h1 className={styles.title}>
            <span>{title}</span>
            <small className={styles.subtitle}>{subtitle}</small>
            <small className={styles.location}>
              {rugTranslations.location} {exhibitedIn}
            </small>
          </h1>
        </div>
      </header>
    </Container>
  );
};
