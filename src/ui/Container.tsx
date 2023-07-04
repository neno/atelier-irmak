import clsxm from '@/lib/clsxm';
import { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={clsxm('container relative mx-auto px-4', className)}>
    {children}
  </div>
);
