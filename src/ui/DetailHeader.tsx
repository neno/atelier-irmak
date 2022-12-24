import clsxm from '@/lib/clsxm';
import { IAsset } from '@/schema/types';
import { FC } from 'react';
import { Container } from './Container';
import { NextImage } from './NextImage';

interface DetailHeaderProps {
  title: string;
  image: IAsset;
}

export const DetailHeader: FC<DetailHeaderProps> = ({ title, image }) => {
  const sliderHeight = 565;
  const { url, description, height, width } = image;
  return (
    <Container className={clsxm('py-16')}>
      <header
        className={clsxm(
          'grid grid-cols-2 shadow-xl shadow-slate-300 relative',
          'before:z-0 before:block content-["*"] before:absolute before:h-[50%] before:w-[25%] before:top-0 before:right-0 before:translate-x-[25%] before:translate-y-[-25%]',
          'before:bg-gray'
        )}
      >
        <div className='aspect-[4/3] bg-primary relative z-10'>
          <NextImage
            src={url}
            alt={description}
            width={width}
            height={height}
            className='w-full h-full object-cover object-bottom'
            sizes='(min-width: 640px) 30vw, (min-width: 1280px) 500px, 100vw'
          />
        </div>
        <div className='aspect-[4/3] bg-white flex items-center justify-center px-32 relative z-10'>
          <h1 className='text-5xl'>{title}</h1>
        </div>
      </header>
    </Container>
  );
  return (
    <Container>
      <header
        className={clsxm(
          'relative block',
          'before:z-0 before:block content-["*"] before:absolute before:h-[50%] before:w-[25%] before:top-[-4rem] before:right-[-4rem] before:translate-x-[-8] before:translate-y-[-8]',
          'before:bg-gray'
        )}
      >
        <div
          className={clsxm(
            'relative z-1 grid grid-cols-2 grid-rows-1 mt-8 overflow-hidden',
            `h-[${sliderHeight}px]`,
            'shadow-xl shadow-slate-300 z-10'
          )}
        >
          <div className={`h-full w-full`}></div>
        </div>
        <div
          className={clsxm(
            'relative h-full w-full grid grid-cols-1 grid-rows-1'
            // styles.wrapper
          )}
        >
          <div
            className={clsxm(
              // styles.text,
              'relative z-0 grid content-center justify-center bg-white'
            )}
          >
            <h1 className='py-16 px-32 text-5xl lg:text-6xl leading-tight lg:leading-tight'>
              {title}
            </h1>
          </div>
        </div>
      </header>
    </Container>
  );
};
