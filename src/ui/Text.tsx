import { IText } from '@/schema/types';
import { FC } from 'react';
import { Container } from './Container';
import { LeadText } from './LeadText';
import { RichText } from './rich-text/RichText';

export const Text: FC<IText> = ({ excerpt, leadText, richText }) => {
  if (richText) {
    return (
      <Container className='my-16'>
        <div className='xl:max-w-4xl xl:mx-auto'>
          <RichText content={richText} />
        </div>
      </Container>
    );
  }

  if (leadText) {
    return (
      <Container className='my-16'>
        <div className='xl:max-w-4xl xl:mx-auto'>
          <LeadText leadText={leadText} />
        </div>
      </Container>
    );
  }

  return <p>{excerpt}</p>;
};
