import { FC, ReactNode } from 'react';

interface IModuleProps {
  children: ReactNode;
}

export const Module: FC<IModuleProps> = ({ children }) => {
  return (
    <div className='container mx-auto px-2 3xl:mx-0 mb-24'>{children}</div>
  );
};
