import { Module } from '@components/layout/Module';
import { FC } from 'react';
import Image from 'next/image';

interface ITeaserRugProps {
  heading?: string;
  text: string;
  image: {
    url: string;
    altText: string;
    position: string;
  };
}

export const TeaserRug: FC<ITeaserRugProps> = ({ heading, text, image }) => {
  return (
    <div className='w-full bg-gray pt-12 my-12'>
      <div className='container mx-auto grid'>
        <header className='md:col-span-7 lg:col-span-6 mx-4 mb-8'>
          <h2 className='text-4xl lg:text-5xl text-dark-blue leading-tight lg:leading-tight'>
            {heading}
          </h2>
        </header>
      </div>

      <div className='relative before:block content-["*"] before:absolute before:top-0 before:left-0 md:before:bg-white before:h-[100%] before:w-[50%] z-1 overflow-hidden md:border-b-[2rem] md:border-gray'>
        <div className='container mx-auto'>
          <div className='md:grid grid-cols-2 '>
            <div className='relative mx-4 py-8 bg-white'>
              <div className='relative aspect-[4/3]'>
                <Image
                  src={image.url}
                  className=''
                  alt={image.altText}
                  layout='fill'
                  objectFit='contain'
                  objectPosition={image.position}
                />
              </div>
            </div>
            <div className='p-8 bg-gray'>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
