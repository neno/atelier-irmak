import type { NextPage } from 'next';
import { Hero } from '@components/hero/Hero';
import { TeaserCompetences } from '@components/teasers/TeaserCompetences';
import data from '../data/data.json';
import { TeaserReferences } from '@components/teasers/TeaserReferences';
import { Grid } from '@components/grid/Grid';

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
    </div>
  );
};

export default Home;
