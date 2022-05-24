import { FC } from 'react';
import Image from 'next/image';
interface ITeaserProps {
  heading?: string;
  text: {
    title?: string;
    body?: string;
  };
  image: {
    url: string;
    altText: string;
    position: string;
  };
}

export const TeaserReferences: FC<ITeaserProps> = ({
  heading,
  text,
  image,
}) => {
  return (
    <div className='container mx-auto pb-12 md:pt-12'>
      <div className='md:grid md:grid-cols-8 pb-24 overflow-hidden'>
        {heading && (
          <header className='md:col-span-7 lg:col-span-6 mx-4 mb-8'>
            <h2 className='text-4xl lg:text-5xl text-irmak-blue leading-tight lg:leading-tight'>
              {heading}
            </h2>
          </header>
        )}
        <div className='md:col-span-4 lg:col-span-5 relative aspect-[4/3] md:aspect-square lg:aspect-[4/3]'>
          <Image
            src={image.url}
            alt={image.altText}
            layout='fill'
            objectFit='cover'
            objectPosition={image.position}
          />
        </div>
        <div className='relative md:col-span-4 lg:col-span-3 py-8 md:px-8 md:py-0 flex flex-col justify-end '>
          {text?.title && (
            <h2 className='text-irmak-blue text-3xl lg:text-4xl mb-8 leading-tight lg:leading-tight'>
              {text?.title}
            </h2>
          )}
          {text?.body && <p className='text-light-blue'>{text?.body}</p>}
        </div>
      </div>
    </div>
  );
};
