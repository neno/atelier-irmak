import clsxm from '@/lib/clsxm';
import { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <div
    className={clsxm(
      // 'w-full lg:container mx-auto relative px-4 sm:px-8 xl:px-16',
      'container relative mx-auto px-4',
      className
    )}
  >
    {children}
  </div>
);
