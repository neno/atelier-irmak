import clsxm from '@/lib/clsxm';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { json } from 'stream/consumers';

interface IButtonProps {
  children: ReactNode;
  type?: 'primary' | 'secondary' | 'tertiary';
  path?: string;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({
  children,
  path,
  onClick,
  type = 'primary',
}) => {
  const styles = clsxm('inline-block relative px-4 py-2 font-medium', {
    'bg-primary text-white': type === 'primary',
  });

  if (path) {
    return (
      <Link href={path} className={styles}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={styles}>
        {children}
      </button>
    );
  }

  return <pre>{JSON.stringify({ path, onClick })}</pre>;
  // throw new Error('Button must have either a path or an onClick handler');
};
