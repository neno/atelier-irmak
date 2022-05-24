import { Module } from '@components/layout/Module';
import { FC } from 'react';
import Image from 'next/image';

interface IReference {
  title: string;
  text: string;
  image: {
    url: string;
    altText: string;
    position?: string;
  };
}

interface IReferencesProps {
  references: IReference[];
}

export const References: FC<IReferencesProps> = ({ references }) => {
  return (
    <Module>
      <div className='grid grid-cols-3 gap-8'>
        {references.map((reference) => (
          <div key={reference.image.url}>
            <div className='relative aspect-square'>
              <Image
                src={reference.image.url}
                alt={reference.image.altText}
                layout='fill'
                objectFit='cover'
                objectPosition={reference.image.position ?? 'center center'}
              />
            </div>
            <div className='p-4'>
              <h3 className='py-4 text-2xl text-irmak-blue'>
                {reference.title}
              </h3>
              <div className='text-light-blue'>{reference.text}</div>
            </div>
          </div>
        ))}
      </div>
    </Module>
  );
};
