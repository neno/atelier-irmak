import { FC } from 'react';

export const LeadText: FC<{ leadText: string }> = ({ leadText }) => (
  <p className='text-primary text-xl lg:text-2xl font-title max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto'>
    <span className='leading-normal' style={{ hyphens: 'auto' }}>
      {leadText}
    </span>
  </p>
);
