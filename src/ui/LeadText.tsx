import { FC } from 'react';

export const LeadText: FC<{ leadText: string }> = ({ leadText }) => (
  <p className='text-primary text-xl lg:text-2xl font-title'>
    <span className='leading-normal' style={{ hyphens: 'auto' }}>
      {leadText}
    </span>
  </p>
);
