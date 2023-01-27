import clsxm from '@/lib/clsxm';
import { BackgroundTypes, IText } from '@/schema/types';
import { FC } from 'react';
import { Container } from './Container';
import { Text } from './Text';
import {RichText} from "@/ui/rich-text/RichText";

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
      <div className='grid mx-auto md:max-w-4xl lg:max-w-full xl:grid-cols-3 gap-4 lg:gap-8 xl:gap-12 2xl:gap-16'>
        {items.map((item) => (
          <section className='relative' key={item.sys.id}>
            <RichText content={item.richText} />
          </section>
        ))}
      </div>
    </Container>
  </div>
);
