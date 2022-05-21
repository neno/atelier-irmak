import clsxm from 'lib/clsxm';
import Image from 'next/image';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <div className='container mx-2 md:mx-4 3xl:mx-0'>
      <div className={clsxm('relative mb-32 md:mb-44', styles.hero)}>
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
            // placeholder='blur'
            layout='fill'
            objectFit='cover'
            objectPosition='right bottom'
          />
        </div>
        <div
          className={clsxm(
            styles.heroCaption,
            'bg-gradient-to-br from-dark-blue via-irmak-blue to-light-blue',
            'opacity-90',
            'p-8 md:p-16',
            'text-white text-xl md:text-3xl font-title leading-relaxed'
          )}
        >
          Die Referenz in Bern für Teppiche &amp; Kelims.
          <br />
          Seit 1985.
        </div>
      </div>
      {/* <div className='container px-2 sm:px-4 lg:px-8 xl:px-8 2xl:px-0 mb-32 md:mb-44 relative'>
        <div className='container aspect-square md:aspect-[2/1] relative'>
          <Image
            src='/images/Sunrise-v5-Ghashghai-meets-Bauhaus-SoFar-SoNear-Studio-for-Zollanvari.jpeg'
            className=''
            alt='Some alt text'
            // placeholder='blur'
            layout='fill'
            objectFit='cover'
            objectPosition='right bottom'
          />
          <div className='absolute w-[253px] md:w-[410px] xl:w-auto right-0 bottom-0 md:bottom-0 p-8 md:p-16 translate-x-2 sm:translate-x-4 lg:translate-x-8 xl:translate-x-[4vw] 2xl:translate-x-[3vw] translate-y-28 md:translate-y-16 text-white text-xl md:text-3xl font-title leading-relaxed bg-irmak-blue bg-gradient-to-br from-dark-blue via-irmak-blue to-light-blue opacity-90'>
            Die Referenz in Bern für Teppiche &amp; Kelims.
            <br />
            Seit 1985.
          </div>
        </div>
      </div> */}
    </div>
  );
};
