import Image from 'next/image';

export const Logo = () => {
  return (
    <div className='relative w-[70px] h-[51px] lg:w-[100px] lg:h-[73px] flex-none'>
      <Image
        src='/svg/atelier-irmak.svg'
        alt='Atelier Irmak Logo'
        layout='fill'
        objectFit='contain'
      />
    </div>
  );
};
