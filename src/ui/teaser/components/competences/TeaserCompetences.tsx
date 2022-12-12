import { FC } from 'react';
import { Container } from '@/ui/Container';
import { Heading } from '@/ui/heading';
import { TeaserImage } from '../TeaserImage';
import { ITeaser } from '@/schema/types';
import { RichText } from '@/ui/rich-text/RichText';
import { Button } from '@/ui/Button';
import clsxm from '@/lib/clsxm';
import styles from './TeaserCompetences.module.css';

export const TeaserCompetences: FC<ITeaser> = ({
  title,
  image,
  text,
  link,
}) => {
  return (
    <section className='w-full py-16'>
      <div
        className={clsxm(
          'relative z-1 overflow-hidden bg-gray',
          'before:block content-["*"] before:absolute before:top-[50%] before:left-0 before:bg-white before:h-[100%] before:w-[66.67%] lg:before:w-[50%] z-1 overflow-hidden'
        )}
      >
        <Container className='py-8'>
          <header
            className={clsxm('lg:w-[75%] 2xl:w-[62.5%]', 'mx-4 md:mx-0 mb-8')}
          >
            <Heading title={title} level={2} />
          </header>
          <div className={clsxm('relative z-2', styles.teaser)}>
            <div
              className={clsxm(
                'relative relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden shadow-xl shadow-slate-300',
                styles.teaserImg
              )}
            >
              <TeaserImage image={image} />
            </div>
            <div
              className={clsxm(styles.teaserText, 'flex flex-col justify-end')}
            >
              {text?.richText && (
                <RichText content={text?.richText} className='md:mr-4' />
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
    </section>
  );
};
