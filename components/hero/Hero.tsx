import { Module } from '@components/layout/Module';
import clsxm from 'lib/clsxm';
import Image from 'next/image';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <div className={clsxm('container mx-auto relative', styles.hero)}>
      <div
        className={clsxm(
          styles.heroImg,
          'relative',
          'aspect-square',
          'md:aspect-[2/1]'
        )}
      >
        <Image
          src='/images/Sunrise-v5-Ghashghai-meets-Bauhaus-SoFar-SoNear-Studio-for-Zollanvari.jpeg'
          className=''
          alt='Some alt text'
          layout='fill'
          objectFit='cover'
          objectPosition='right bottom'
        />
      </div>
      <div
        className={clsxm(
          styles.heroCaption,
          'bg-irmak-blue',
          'opacity-90',
          'p-8 lg:p-8 2xl:p-16',
          // 'p-6',
          'text-white text-xl lg:text-3xl font-title leading-relaxed lg:leading-tight',
          'flex items-center justify-content-center self-center'
        )}
      >
        <p>
          Die Referenz in Bern für Teppiche &amp; Kelims.
          <br />
          Seit 1985.
        </p>
      </div>
    </div>
  );
};
