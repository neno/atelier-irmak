import clsxm from '@/lib/clsxm';
import { IGrid } from '@/schema/types';
import { FC } from 'react';
import { Container } from '../Container';
import { GridCol } from './GridCol';

export const Grid: FC<IGrid> = ({
  background,
  columnsCollection: { items },
  layout,
}) => {
  const bgColor = `bg-${background}`;
  const colWidths = layout.split('-').map((width, index) => {
    if (index === 0) {
      return `col-start-1 col-end-${+width + 1}`;
    }
    return `col-span-${width}`;
  });
  // const colWidths = ['col-start-1 col-end-5', 'col-span-8'];

  return (
    <div className={clsxm('py-16', { 
    'bg-gray': background === 'light',
    'bg-primary': background === 'dark', 
    })}>
      <Container>
        <div className={`grid grid-cols-12 gap-8`}>
          {items.map((col, index) => (
            <div key={col.sys.id} className={colWidths[index]}>
              <GridCol {...col} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
