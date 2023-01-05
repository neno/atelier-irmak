import { FC } from 'react';
import { IAsset, IHero } from '@/schema/types';
import { LandingPageHero } from './components/landing-page-hero/LandingPageHero';
import { TopicPageHero } from './components/topic-page-hero/TopicPageHero';

export const Hero: FC<IHero> = ({ type, image, title }) => {
  if (type === 'Landing') {
    return <LandingPageHero title={title} image={image} />;
  }

  if (type === 'Topic') {
    return <TopicPageHero title={title} image={image} />;
  }

  throw new Error(`Hero type ${type} not found`);
  // return (
  //   <Container
  //     className={
  //       clsxm('relative grid grid-cols-12 pb-16', 'aspect-square aspect-[2/1]')
  //       // 'relative grid grid-cols-12 pb-16'
  //       // 'aspect-square aspect-[2/1]'
  //     }
  //   >
  //     <div className={clsxm(styles.imageWrapper)}>
  //       <NextImage
  //         src={image.url}
  //         width={image.width}
  //         height={image.height}
  //         alt={image.description}
  //         priority={true}
  //         className='aspect-square md:aspect-[2/1] object-cover object-center'
  //         sizes='(min-width: 90em) 90rem, 100vw'
  //       />
  //     </div>
  //     <div className={clsxm(styles.textWrapper)}>
  //       <h1
  //         className={clsxm(
  //           styles.title,
  //           'text-white text-xl lg:text-3xl font-title leading-relaxed lg:leading-tight'
  //         )}
  //       >
  //         {title}
  //       </h1>
  //     </div>
  //   </Container>
  // );
};
