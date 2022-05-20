import Image from 'next/image';

export const Logo = () => {
  const ratio = 222 / 305;
  const w = 70;
  const h = w * ratio;
  return (
    <div className={`relative w-[70px] h-[51px] md:w-[100px] md:h-[73px] `}>
      <Image
        src='/svg/atelier-irmak.svg'
        alt='Atelier Irmak Logo'
        layout='fill'
        objectFit='contain'
      />
    </div>
  );
};
