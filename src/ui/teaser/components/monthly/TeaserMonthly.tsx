import { FC } from 'react';
import { ITeaser } from '@/schema/types';
import { Button } from '@/ui/Button';
import { Container } from '@/ui/Container';
import { Heading } from '@/ui/heading';
import { RichText } from '@/ui/rich-text/RichText';
import { TeaserImage } from '../TeaserImage';

export const TeaserMonthly: FC<ITeaser> = ({ title, image, text, link }) => {
  return (
    <div className='w-full bg-gray mb-[-64px]'>
      <Container className='py-16'>
        <div className='grid'>
          <header className='md:col-span-7 lg:col-span-6 mx-4'>
            <Heading title={title} level={2} />
          </header>
        </div>
        <div className='md:grid grid-cols-2 '>
          <div className='relative border-[1rem] border-white aspect-[4/3] shadow-xl shadow-slate-300'>
            <TeaserImage image={image} />
          </div>
          <div className='px-8 bg-gray flex flex-col justify-end'>
            {text?.richText && (
              <RichText content={text?.richText} className='md:mr-4 mb-4' />
            )}
            {link && (
              <p className='py-4 md:pb-0 mb-0'>
                <Button path={link.page?.slug} type='primary'>
                  {link.title}
                </Button>
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
