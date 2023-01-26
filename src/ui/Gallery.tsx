import clsxm from '@/lib/clsxm';
import { BackgroundTypes, IReferenceItem, IText } from '@/schema/types';
import { FC } from 'react';
import { Card } from './Card';
import { Container } from './Container';

interface GalleryProps {
  items: IReferenceItem[];
  background?: BackgroundTypes;
}
export const Gallery: FC<GalleryProps> = ({ items, background = 'none' }) => (
  <div
    className={clsxm('gallery', {
      'w-full': background !== 'none',
      'bg-gray': background === 'light',
      'bg-primary': background === 'dark',
    })}
  >
    <Container className='py-8 sm:py-16'>
      <ul className='grid lg:grid-cols-3 gap-4 lg:gap-8'>
        {items.map((item) => (
          <li className='relative' key={item.sys.id}>
            <Card
              path={`/referenzen/${item.slug}`}
              image={item.featuredImage}
              text={item.title}
            />
          </li>
        ))}
      </ul>
    </Container>
  </div>
);
