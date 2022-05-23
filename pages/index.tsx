import type { NextPage } from 'next';
import { Hero } from '@components/hero/Hero';
import { TeaserCompetences } from '@components/teasers/TeaserCompetences';
import data from '../data/data.json';
import { TeaserReferences } from '@components/teasers/TeaserReferences';
import { Grid } from '@components/grid/Grid';
import { TeaserRug } from '@components/teasers/TeaserRug';

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
        heading={data.home.references.heading}
        image={data.home.references.image}
        text={data.home.references.text}
      />
      <TeaserRug
        heading={data.home.flyingRug.heading}
        image={data.home.flyingRug.image}
        text={data.home.flyingRug.text}
      />
    </div>
  );
};

export default Home;
