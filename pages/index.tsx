import type { NextPage } from 'next';
import { Hero } from '@components/hero/Hero';
import { TeaserReferences } from '@components/teasers/TeaserReferences';
import data from '../data/data.json';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <TeaserReferences
        heading={data.home.inspiration.heading}
        image={data.home.inspiration.image}
        text={data.home.inspiration.text}
        // backgroundColor={data.home.inspiration.backgroundColor}
      />
    </div>
  );
};

export default Home;
