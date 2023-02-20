import { FC } from 'react';
import { TeaserComponentType, TeaserType } from './Teaser.types';
import {
  TeaserCompetences,
  TeaserMonthly,
  TeaserCollection,
} from './components';
import { ITeaser } from '@/schema/types';

const TeaserMap = new Map<TeaserType, TeaserComponentType>();
TeaserMap.set('Kompetenz', TeaserCompetences);
TeaserMap.set('Kollektion', TeaserCollection);
TeaserMap.set('Der fliegende Teppich', TeaserMonthly);

export const Teaser: FC<ITeaser> = ({ type, ...rest }) => {
  const TeaserComponent = TeaserMap.get(type);
  if (TeaserComponent) {
    return <TeaserComponent type={type} {...rest} />;
  }

  throw new Error(`Teaser type ${type} not found`);
};
