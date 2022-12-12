import { IReferenceItem } from '@/schema/types';
import { FC } from 'react';
import { Card } from './Card';
import { Container } from './Container';

interface GalleryProps {
  items: IReferenceItem[];
}
export const Gallery: FC<GalleryProps> = ({ items }) => (
  <Container className='py-16'>
    <ul className='grid grid-cols-3 gap-4 lg:gap-8'>
      {items.map(({ slug, featuredImage, title }) => (
        <li className='relative' key={slug}>
          <Card
            path={`/reference/${slug}`}
            image={featuredImage}
            text={title}
          />
        </li>
      ))}
    </ul>
  </Container>
);
