import { FC, ReactNode } from 'react';

interface IModuleProps {
  children: ReactNode;
}

export const Module: FC<IModuleProps> = ({ children }) => {
  return <div className='container mx-auto py-12'>{children}</div>;
};
