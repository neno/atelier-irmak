import clsxm from '@/lib/clsxm';
import { IText } from '@/schema/types';
import { FC } from 'react';
import { Container } from './Container';
import { LeadText } from './LeadText';
import { RichText } from './rich-text/RichText';

export const Text: FC<IText> = ({ excerpt, leadText, richText }) => {
  if (richText) {
    return (
      <Container className='my-12'>
        <div className='max-w-4xl mx-auto'>
          <RichText content={richText} />
        </div>
      </Container>
    );
  }

  if (leadText) {
    return (
      <Container className='my-12'>
        <div className='max-w-4xl mx-auto'>
          <LeadText leadText={leadText} />
        </div>
      </Container>
    );
  }

  return <p>{excerpt}</p>;
};
