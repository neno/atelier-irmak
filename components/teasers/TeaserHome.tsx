import Image from 'next/image';

export const TeaserHome = () => {
  return (
    <div className='container w-[1570px] h-[785px] relative'>
      <Image
        src='/images/Sunrise-v5-Ghashghai-meets-Bauhaus-SoFar-SoNear-Studio-for-Zollanvari.jpeg'
        className=''
        alt='Some alt text'
        // placeholder='blur'
        layout='fill'
        objectFit='fill'
        objectPosition='right bottom'
      />
      <div
        className='absolute text-white text-3xl leading-relaxed bg-irmak-blue p-16 right-0 bottom-0 translate-x-16 translate-y-16 bg-gradient-to-br from-dark-blue via-irmak-blue to-light-blue opacity-95'
        // style=`linear-gradient(to bottom right, rgba(0, 50, 125, 0.9) 20%, rgba(0, 120, 187, 0.9) 70%, rgba(0, 164, 224, 0.9) 100%);`
      >
        Wir sind die Schweizer Referenz für
        <br />
        Teppiche, Kelims &amp; textiles Design.
        <br />
        Seit 1950.
      </div>
    </div>
  );
};
