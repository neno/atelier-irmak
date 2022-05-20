import type { NextPage } from 'next';
import { Logo } from '@components/logo/Logo';
import { Hero } from '@components/hero/Hero';
import { TeaserHome } from '@components/teasers/TeaserHome';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <h1>Take Your Skiing to New Heights</h1>
      <h2>Take Your Skiing to New Heights</h2>
      <h3>Take Your Skiing to New Heights</h3>
      <h4>Take Your Skiing to New Heights</h4>
      <h5>Take Your Skiing to New Heights</h5>
      <h6>Take Your Skiing to New Heights</h6>
      <p className='text-font-color font-copy'>
        Ultima Courchevel Belvédère couldn't be any closer to the slope. Our
        resort is made up of 13 ski-in and ski-out residences with privileged,
        uninterrupted views of the forested mountains. Balance days of skiing
        with mind-soothing treatments in our world-class spas, private chef
        experiences, and moments in the elegant lobby & terrace area.
      </p>
      <p className='font-copy'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error atque
        assumenda repellat distinctio neque eos hic id nesciunt excepturi eum,
        quo perspiciatis quis molestiae quod architecto sit inventore eligendi
        voluptatibus.
      </p>
    </div>
  );
};

export default Home;
