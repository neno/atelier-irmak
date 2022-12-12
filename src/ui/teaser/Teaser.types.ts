import { IAsset } from '@/schema/types';
import { TeaserCompetences } from './components/competences/TeaserCompetences';
import { TeaserMonthly } from './components/monthly/TeaserMonthly';
import { TeaserReferences } from './components/references/TeaserReferences';

export type TeaserComponentType = typeof TeaserCompetences | typeof TeaserReferences | typeof TeaserMonthly
export type TeaserType = 'Kompetenz' | 'Referenz' | 'Der fliegende Teppich';

export interface ITeaserProps {
  slug: string;
  type: TeaserType;
  title: string;
  subtitle: string;
  excerpt: string;
  image: IAsset;
}
