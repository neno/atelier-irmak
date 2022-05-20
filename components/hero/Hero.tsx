import Image from 'next/image';

export const Hero = () => {
  return (
    <div className='container px-2 mb-32 md:mb-44 relative'>
      <div className='container aspect-square m:aspect-video  2xl:w-[1570px] 2xl:h-[785px] relative'>
        <Image
          src='/images/Sunrise-v5-Ghashghai-meets-Bauhaus-SoFar-SoNear-Studio-for-Zollanvari.jpeg'
          className=''
          alt='Some alt text'
          // placeholder='blur'
          layout='fill'
          objectFit='cover'
          objectPosition='right bottom'
        />
        <div
          className='absolute w-[253px] md:w-[410px] xl:w-auto right-0 bottom-0 md:bottom-0 p-8 md:p-16 translate-x-2 md:translate-x-16 translate-y-28 md:translate-y-16 text-white text-xl md:text-3xl font-title leading-relaxed bg-irmak-blue bg-gradient-to-br from-dark-blue via-irmak-blue to-light-blue opacity-90'
          // style=`linear-gradient(to bottom right, rgba(0, 50, 125, 0.9) 20%, rgba(0, 120, 187, 0.9) 70%, rgba(0, 164, 224, 0.9) 100%);`
        >
          Die Referenz in Bern für Teppiche &amp; Kelims.
          <br />
          Seit 1985.
        </div>
      </div>
    </div>
  );
};
