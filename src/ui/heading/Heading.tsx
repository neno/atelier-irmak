import { FC } from 'react';
import styles from './Heading.module.css';

interface HeadingProps {
  title: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading: FC<HeadingProps> = ({ title, level }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return <HeadingTag className={styles[HeadingTag]}>{title}</HeadingTag>;
};
