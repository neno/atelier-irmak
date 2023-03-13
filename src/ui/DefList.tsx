import { IRugDefinition } from '@/schema/types';
import { rugTranslations, RugTranslationsType } from 'public/locales/de/rug';
import React from 'react';
import { FC } from 'react';

interface DefListProps {
  items: IRugDefinition;
  sorting: string[];
}

export const DefList: FC<DefListProps> = ({ items, sorting }) => {
  const filteredKeys = Object.keys(items).filter(
    (key) => !!items[key as keyof IRugDefinition]
  );
  return (
    <dl className='block sm:grid sm:grid-cols-4 lg:block'>
      {sorting
        .filter((key) => filteredKeys.includes(key))
        .map((key) => (
          <React.Fragment key={key}>
            <dt className='font-bold font-title text-light sm:col-span-1'>
              {rugTranslations[key as keyof RugTranslationsType]}
            </dt>
            <dd className='mb-4 sm:col-span-3'>
              {items[key as keyof IRugDefinition]}
            </dd>
          </React.Fragment>
        ))}
    </dl>
  );
};
