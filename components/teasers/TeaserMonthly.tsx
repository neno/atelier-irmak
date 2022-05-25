import { FC } from 'react';
import Image from 'next/image';

interface ITeaserMonthlyProps {
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

export const TeaserMonthly: FC<ITeaserMonthlyProps> = ({
  heading,
  text,
  image,
}) => {
  return (
    <div className='w-full bg-gray pt-12 mt-12'>
      <div className='container mx-auto grid'>
        <header className='md:col-span-7 lg:col-span-6 mx-4 mb-12'>
          <h2 className='text-4xl lg:text-5xl text-primary leading-tight lg:leading-tight'>
            {heading}
          </h2>
        </header>
      </div>

      <div className='relative before:block content-["*"] before:absolute before:top-0 before:left-0 md:before:bg-white before:h-[100%] before:w-[50%] z-1 overflow-hidden border-b-[2rem] md:border-b-[4rem] border-gray'>
        <div className='container mx-auto'>
          <div className='md:grid grid-cols-2 '>
            <div className='relative m-4 bg-white'>
              <div className='relative aspect-[4/3]'>
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
            <div className='px-8 bg-gray flex flex-col justify-end'>
              {text?.title && (
                <h2 className='text-primary text-3xl lg:text-4xl pb-4 leading-tight lg:leading-tight'>
                  {text?.title}
                </h2>
              )}
              <p>{text.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
