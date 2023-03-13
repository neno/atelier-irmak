import { FC } from 'react';

interface PaletteProps {
  palette: Record<string, string>;
}

export const Palette: FC<PaletteProps> = ({ palette }) => {
  const colors: Record<string, string>[] = Object.keys(palette).map(
    (label) => ({ label, color: `#${palette[label].toLowerCase()}` })
  );

  return (
    <aside>
      <h4 className=''>Palette</h4>
      <div className='grid grid-cols-5'>
        {colors.map(({ label, color }) => (
          <div
            key={label}
            className='aspect-[2/1] sm:aspect-[1/1] lg:aspect-[2/1]'
            style={{ backgroundColor: color }}
            title={label}
          ></div>
        ))}
      </div>
    </aside>
  );
};
