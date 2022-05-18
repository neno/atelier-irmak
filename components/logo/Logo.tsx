import Image from 'next/image';

export const Logo = () => {
  const ratio = 222 / 305;
  const w = 140;
  const h = w * ratio;
  return (
    <Image
      src='/svg/atelier-irmak.svg'
      alt='Atelier Irmak Logo'
      width={w}
      height={h}
    />
  );
};
