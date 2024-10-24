import { IAsset } from '@/schema/types';
import { TeaserReference } from './components/collection/TeaserReference';
import { TeaserCompetences } from './components/competences/TeaserCompetences';
import { TeaserMonthly } from './components/monthly/TeaserMonthly';

export type TeaserComponentType = typeof TeaserCompetences | typeof TeaserReference | typeof TeaserMonthly
export type TeaserType = 'Kompetenz' | 'Referenz' | 'Der fliegende Teppich';

export interface ITeaserProps {
  slug: string;
  type: TeaserType;
  title: string;
  subtitle: string;
  excerpt: string;
  image: IAsset;
}
