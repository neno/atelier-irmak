import type { NextPage } from 'next';
import { Hero } from '@components/hero/Hero';
import { TeaserCompetences } from '@components/teasers/TeaserCompetences';
import data from '../data/data.json';
import { TeaserReferences } from '@components/teasers/TeaserReferences';
import { Grid } from '@components/grid/Grid';
import { TeaserMonthly } from '@components/teasers/TeaserMonthly';
import { References } from '@components/references/References';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      {/* <Grid /> */}
      <TeaserCompetences
        heading={data.home.competences.heading}
        image={data.home.competences.image}
        text={data.home.competences.text}
      />
      <TeaserReferences
        heading={data.home.referenceTeaser.heading}
        image={data.home.referenceTeaser.image}
        text={data.home.referenceTeaser.text}
      />
      <References references={data.home.references} />
      <TeaserMonthly
        heading={data.home.flyingRug.heading}
        image={data.home.flyingRug.image}
        text={data.home.flyingRug.text}
      />
    </div>
  );
};

export default Home;
