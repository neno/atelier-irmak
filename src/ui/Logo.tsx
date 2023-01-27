import { NextImage } from './NextImage';

export const Logo = () => {
  return (
    <div className='relative w-[50px] h-[37px] lg:w-[100px] lg:h-[73px] flex-none'>
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
