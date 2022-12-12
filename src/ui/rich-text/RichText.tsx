import React, { FC } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container } from '../Container';
import clsxm from '@/lib/clsxm';
import styles from './RichText.module.css';

interface RichTextProps {
  content: {
    json: any;
  };
  className?: string;
}

export const RichText: FC<RichTextProps> = ({ content, className }) => {
  return (
    <div className={clsxm(className, styles.richText)}>
      {documentToReactComponents(content.json)}
    </div>
  );
};
