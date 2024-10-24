import clsxm from '@/lib/clsxm';
import { BackgroundTypes, IRugItem, IText } from '@/schema/types';
import { FC } from 'react';
import { Card } from './Card';
import { Container } from './Container';

interface GalleryProps {
  items: IRugItem[];
  background?: BackgroundTypes;
}
export const Gallery: FC<GalleryProps> = ({ items, background = 'none' }) => (
  <div
    className={clsxm('gallery mt-16 py-16 lg:mt-24 lg:py-24', {
      'w-full': background !== 'none',
      'bg-gray': background === 'light',
      'bg-primary': background === 'dark',
    })}
  >
    <Container>
      <ul className='grid md:grid-cols-2 gap-8 md:gap-y-16'>
        {items.map((item) => (
          <li className='relative' key={item.sys.id}>
            <Card
              path={`/referenzen/${item.slug}`}
              image={item.featuredImage}
              text={item.name}
            />
          </li>
        ))}
      </ul>
    </Container>
  </div>
);
