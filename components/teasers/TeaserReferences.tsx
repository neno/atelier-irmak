import { Module } from '@components/layout/Module';
import clsxm from 'lib/clsxm';
import Image from 'next/image';
import { FC } from 'react';

interface ITeaserProps {
  heading?: string;
  backgroundColor?: string;
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
    <div className='w-full relative mb-24 bg-gray content-["*"] before:block before:absolute before:top-[50%] before:left-0 before:bg-white before:h-[100%] before:w-[50%] z-1 overflow-hidden'>
      <Module>
        <div className='grid grid-cols-8 pt-16 relative z-2'>
          {heading && (
            <>
              <div className='col-span-6'>
                <header className='section-heading my-8'>
                  <h2 className='text-5xl leading-tight'>{heading}</h2>
                </header>
              </div>
            </>
          )}
          <div className='col-span-2'></div>
          <div className='col-span-3 pr-8 flex flex-col justify-end'>
            <div>
              {text?.title && (
                <h2 className='text-4xl mb-8 leading-tight'>{text?.title}</h2>
              )}
              {text?.body && <p>{text?.body}</p>}
            </div>
          </div>

          <div className='col-span-5 relative aspect-[4/3] bg-dark-blue'>
            <Image
              src={image.url}
              className=''
              alt={image.altText}
              layout='fill'
              objectFit='cover'
              objectPosition={image.position}
            />
          </div>
        </div>
      </Module>
    </div>
  );
};
