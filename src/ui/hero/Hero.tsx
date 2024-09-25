import { FC } from 'react';
import { IHero } from '@/schema/types';
import { LandingPageHero } from './components/landing-page-hero/LandingPageHero';
import { TopicPageHero } from './components/topic-page-hero/TopicPageHero';

export const Hero: FC<IHero> = ({ type, image, title, sliderCollection }) => {
  if (type === 'Landing') {
    return <LandingPageHero title={title} image={image} sliderCollection={sliderCollection}  />;
  }

  if (type === 'Topic') {
    return <TopicPageHero title={title} image={image} />;
  }

  throw new Error(`Hero type ${type} not found`);
};
