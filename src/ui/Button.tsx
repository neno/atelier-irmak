import clsxm from '@/lib/clsxm';
import Link from 'next/link';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
  type?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  path?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: FC<IButtonProps> = ({
  children,
  path,
  onClick,
  type = 'primary',
  className,
}) => {
  const styles = clsxm(
    'inline-block relative px-4 py-2 font-medium rounded',
    {
      'bg-primary text-white': type === 'primary',
    },
    {
      'px-0 text-light underline underline-offset-8 hover:text-primary font-normal': type === 'ghost',
    },
    className
  );

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

  throw new Error('Button must have either a path or an onClick handler');
};
