import clsxm from '@/lib/clsxm';
import { IHero } from '@/schema/types';
import { Container } from '@/ui/Container';
import { NextImage } from '@/ui/NextImage';
import { FC } from 'react';

export const TopicPageHero: FC<Pick<IHero, 'title' | 'image'>> = ({
  title,
  image,
}) => {
  const { url, description, height, width } = image;
  const aspectW = Math.round(width / 1000);
  const aspectH = Math.round(height / 1000);
  const aspectRatio = `aspect-[${aspectW}/${aspectH}]`;
  return (
    <Container className={clsxm('py-16')}>
      <header
        className={clsxm(
          'z-10 grid grid-cols-12 items-center bg-white shadow-xl shadow-slate-300 relative',
          'before:z-0 before:block content-["*"] before:absolute before:h-[50%] before:w-[25%] before:top-0 before:right-0 before:translate-x-[25%] before:translate-y-[-25%]',
          'before:bg-gray'
        )}
      >
        <div
          className={clsxm('bg-primary relative z-10', 'col-start-1 col-end-4')}
        >
          <NextImage
            src={url}
            alt={description}
            width={width}
            height={height}
            className={clsxm(
              'w-full h-full object-cover object-bottom',
              aspectRatio
            )}
            sizes='(min-width: 640px) 30vw, (min-width: 1280px) 500px, 100vw'
          />
        </div>
        <div
          className={clsxm(
            'bg-white h-full flex items-center justify-center px-32 relative z-10',
            'col-start-4 col-end-13'
          )}
        >
          <h1 className='text-5xl'>{title}</h1>
        </div>
      </header>
    </Container>
  );
};
