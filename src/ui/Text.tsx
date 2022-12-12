import clsxm from '@/lib/clsxm';
import { IText } from '@/schema/types';
import { FC } from 'react';
import { Container } from './Container';
import { RichText } from './rich-text/RichText';

export const Text: FC<IText> = ({ excerpt, leadText, richText }) => {
  if (richText) {
    return (
      <Container className='my-12'>
        <div className='grid grid-cols-12'>
          <div className={clsxm('col-start-2 col-end-9')}>
            <RichText content={richText} />
          </div>
        </div>
      </Container>
    );
  }

  if (leadText) {
    return (
      <Container className='my-12'>
        <div className='grid grid-cols-12'>
          <p
            className={clsxm(
              'col-start-2 col-end-11',
              'text-xl lg:text-3xl leading-normal lg:leading-normal font-title'
            )}
          >
            {leadText}
          </p>
        </div>
      </Container>
    );
  }

  return <p>{excerpt}</p>;
};
