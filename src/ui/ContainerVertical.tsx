import clsxm from '@/lib/clsxm';
import { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  tag?: 'div' | 'section' | 'aside';
}

export const ContainerVertical: FC<ContainerProps> = ({
  children,
  className,
  tag = 'div',
}) => {
  const Tag = tag;
  return (
    <Tag className={clsxm('flex flex-col gap-12 md:gap-16', className)}>
      {children}
    </Tag>
  );
};
