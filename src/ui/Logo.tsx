import { NextImage } from './NextImage';

export const Logo = () => {
  return (
    <div className='relative w-[4.6875rem] h-[3.4375rem] md:w-[6.25rem] md:h-[4.5625rem] flex-none'>
      <NextImage
        src='/svg/atelier-irmak.svg'
        alt='Logo Atelier Irmak'
        width={100}
        height={73}
        className='w-full h-full object-contain object-center'
      />
    </div>
  );
};
