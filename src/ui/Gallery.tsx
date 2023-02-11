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
    <Container className='pb-8 md:pb-16'>
      <ul className='grid md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-16'>
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
