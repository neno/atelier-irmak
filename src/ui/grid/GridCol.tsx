import { IGridCol } from '@/schema/types';
import { FC } from 'react';
import { NextImage } from '../NextImage';
import { Text } from '../Text';

export const GridCol: FC<IGridCol> = ({
  sys,
  __typename,
  reference,
  media,
}) => {
  // return <pre>{JSON.stringify({ sys, reference, media }, null, 2)}</pre>;
  if (media) {
    // return <pre>{JSON.stringify(media, null, 2)}</pre>;
    return (
      <NextImage
        src={media.url}
        alt={media.description}
        width={media.width}
        height={media.height}
        className='w-full h-full object-contain object-center'
        // sizes='200px'
        sizes='(min-width: 640px) 30vw, (min-width: 1280px) 500px, 100vw'
      />
    );
  }

  if (reference) {
    return <Text {...reference} />;
  }

  throw new Error(`Teaser type ${__typename} not found`);
};
