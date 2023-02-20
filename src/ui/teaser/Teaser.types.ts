import { IAsset } from '@/schema/types';
import { TeaserCollection } from './components/collection/TeaserCollection';
import { TeaserCompetences } from './components/competences/TeaserCompetences';
import { TeaserMonthly } from './components/monthly/TeaserMonthly';

export type TeaserComponentType = typeof TeaserCompetences | typeof TeaserCollection | typeof TeaserMonthly
export type TeaserType = 'Kompetenz' | 'Kollektion' | 'Der fliegende Teppich';

export interface ITeaserProps {
  slug: string;
  type: TeaserType;
  title: string;
  subtitle: string;
  excerpt: string;
  image: IAsset;
}
