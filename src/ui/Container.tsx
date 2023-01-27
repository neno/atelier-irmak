import clsxm from '@/lib/clsxm';
import { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <div
    className={clsxm(
      'w-full md:container mx-auto relative px-4 px-8 xl:px-16',
      className
    )}
  >
    {children}
  </div>
);
