import { FC } from 'react';
import { Container } from './Container';

export const LeadText: FC<{ leadText: string }> = ({ leadText }) => (
  <p className='text-primary text-xl lg:text-2xl font-title'>
    <span className='leading-normal'>{leadText}</span>
  </p>
);
