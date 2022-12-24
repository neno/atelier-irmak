import { IReferenceDefintion } from '@/schema/types';
import React from 'react';
import { FC } from 'react';

interface IKeyValue {
  [key: string]: string | null;
}

interface DefListProps {
  items: IReferenceDefintion;
  sorting: string[];
}

// export interface IReferenceDefintion {
//   name: string;
//   origin: string;
//   size: string;
//   age: string;
//   location: string;
//   room: string;
//   placing: string | null;
// }

// const machesterUnited:PlayersNumbers = <PlayersNumbers>{};

export const DefList: FC<DefListProps> = ({ items, sorting }) => {
  const filteredKeys = Object.keys(items).filter(
    (key) => !!items[key as keyof IReferenceDefintion]
  );
  return (
    <dl>
      {sorting
        .filter((key) => filteredKeys.includes(key))
        .map((key) => (
          <React.Fragment key={key}>
            <dt className='font-bold font-title text-light'>{key}</dt>
            <dd className='mb-4'>{items[key as keyof IReferenceDefintion]}</dd>
          </React.Fragment>
        ))}
    </dl>
  );
};
