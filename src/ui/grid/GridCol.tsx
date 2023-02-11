import clsxm from '@/lib/clsxm';
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
  if (media) {
    return (
      <NextImage
        src={media.url}
        alt={media.description}
        width={media.width}
        height={media.height}
        className={clsxm('w-full mt-12', {
          'sm:max-w-[50%] sm:mx-auto lg:max-w-full':
            media?.height > media?.width,
        })}
        sizes='(min-width: 1280px) 500px, (min-width: 768px) 30vw, 100vw'
      />
    );
  }

  if (reference) {
    return <Text {...reference} />;
  }

  throw new Error(`Teaser type ${__typename} not found`);
};
