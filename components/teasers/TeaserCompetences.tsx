import { Module } from '@components/layout/Module';
import Image from 'next/image';
import { FC } from 'react';
import clsxm from 'lib/clsxm';
import styles from './TeaserCompetences.module.css';

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

export const TeaserCompetences: FC<ITeaserProps> = ({
  heading,
  text,
  image,
}) => {
  return (
    <div className='w-full py-12'>
      <div
        className={clsxm(
          'relative bg-gray',
          'before:block content-["*"] before:absolute before:top-[50%] before:left-0 before:bg-white before:h-[100%] before:w-[66.67%] lg:before:w-[50%] z-1 overflow-hidden'
        )}
      >
        <Module>
          {heading && (
            <header className='lg:w-[75%] mx-4 mb-8 md:mb-0 lg:mb-8 2xl:w-[62.5%]'>
              <h2 className='text-4xl lg:text-5xl text-primary leading-tight lg:leading-tight'>
                {heading}
              </h2>
            </header>
          )}
          <div className={clsxm('relative z-2', styles.teaser)}>
            <div
              className={clsxm(
                'relative p-4 relative aspect-[4/3] md:aspect-square lg:aspect-[4/3]',
                styles.teaserImg
              )}
            >
              <Image
                src={image.url}
                className=''
                alt={image.altText}
                layout='fill'
                objectFit='cover'
                objectPosition={image.position}
              />
            </div>
            <div
              className={clsxm(styles.teaserText, 'flex flex-col justify-end')}
            >
              {text?.title && (
                <h2 className='text-primary text-3xl lg:text-4xl p-4 pt-8 md:pt-4 leading-tight lg:leading-tight'>
                  {text?.title}
                </h2>
              )}
              {text?.body && <p className='p-4 md:pb-0'>{text?.body}</p>}
            </div>
          </div>
        </Module>
      </div>
    </div>
  );
};
