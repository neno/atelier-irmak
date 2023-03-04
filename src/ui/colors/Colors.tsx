import {
  colorTranslations,
  ColorTranslationsType,
} from 'public/locales/de/colors';
import { FC, Fragment } from 'react';

interface ColorsProps {
  colors: string[];
}

export const Colors: FC<ColorsProps> = ({ colors }) => {
  return (
    <aside>
      <h4>Grundfarben</h4>
      <div className='grid grid-cols-2'>
        {colors.map((color) => (
          <div className='flex items-center gap-8' key={color}>
            <div
              className='w-4 flex-0 h-4'
              style={{ backgroundColor: color.toLowerCase() }}
            ></div>
            <div className='flex-1 flex-base-[90%]'>
              {colorTranslations[color as keyof ColorTranslationsType]}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
