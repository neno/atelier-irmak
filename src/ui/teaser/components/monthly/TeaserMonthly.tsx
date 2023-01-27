import { FC } from 'react';
import { ITeaser } from '@/schema/types';
import { Button } from '@/ui/Button';
import { Container } from '@/ui/Container';
import { Heading } from '@/ui/heading';
import { RichText } from '@/ui/rich-text/RichText';
import { TeaserImage } from '../TeaserImage';
import clsxm from "@/lib/clsxm";

export const TeaserMonthly: FC<ITeaser> = ({ title, image, text, link }) => {
  return (
    <div className={clsxm('w-full bg-gray')}>
      <Container className={clsxm('py-8 sm:py-16')}>
        <div className={clsxm('grid')}>
          <header className={clsxm('md:col-span-7 lg:col-span-6 mx-4 mb-8')}>
            <Heading title={title} level={2} />
          </header>
        </div>
        <div className={clsxm('md:grid grid-cols-2')}>
          <div className={clsxm('relative border-[1rem] border-white aspect-[4/3] shadow-xl shadow-slate-300')}>
            <TeaserImage image={image} />
          </div>
          <div className={clsxm('mt-8 md:mt-0 px-8 bg-gray flex flex-col justify-end')}>
            {text?.richText && (
              <RichText content={text?.richText} className={clsxm('md:mr-4 mb-4')} />
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
    </div>
  );
};
