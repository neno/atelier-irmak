import { FC } from 'react';
import { Container } from '@/ui/Container';
import { Heading } from '@/ui/heading';
import { TeaserImage } from '../TeaserImage';
import { ITeaser } from '@/schema/types';
import { RichText } from '@/ui/rich-text/RichText';
import { Button } from '@/ui/Button';
import clsxm from "@/lib/clsxm";

export const TeaserReferences: FC<ITeaser> = ({ title, image, text, link }) => {
  return (
    <Container className={clsxm('py-8 sm:py-16')}>
      <div className={clsxm('md:grid md:grid-cols-8 overflow-hidden')}>
        <header className={clsxm('md:col-span-7 lg:col-span-6 mx-4 md:mx-0 mb-8')}>
          <Heading title={title} level={2} />
        </header>
        <div className={clsxm('relative md:col-span-4 lg:col-span-5 relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] shadow-xl shadow-slate-300')}>
          <TeaserImage image={image} />
        </div>
        <div className={clsxm('relative md:col-span-4 lg:col-span-3 md:pl-8 mt-8 md:mt-0 flex flex-col justify-end')}>
          {text?.richText && (
            <RichText content={text?.richText} className={clsxm('md:mr-4 md:mb-4')} />
          )}
          {link && (
            <p className={clsxm('py-4 md:pb-0 mb-0')}>
              <Button path={link.page?.slug} type='primary'>
                {link.title}
              </Button>
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};
