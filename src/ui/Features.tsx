import clsxm from '@/lib/clsxm';
import { BackgroundTypes, IText } from '@/schema/types';
import { FC } from 'react';
import { Container } from './Container';
import { Text } from './Text';

interface FeaturesProps {
  items: IText[];
  background?: BackgroundTypes;
}
export const Features: FC<FeaturesProps> = ({ items, background = 'none' }) => (
  <div
    className={clsxm('features', {
      'w-full': background !== 'none',
      'bg-gray': background === 'light',
      'bg-primary': background === 'dark',
    })}
  >
    <Container className={clsxm('py-8 sm:py-16')}>
      <div className='grid grid-cols-3 gap-4 lg:gap-8'>
        {items.map((item) => (
          <section className='relative' key={item.sys.id}>
            <Text {...item} />
          </section>
        ))}
      </div>
    </Container>
  </div>
);
