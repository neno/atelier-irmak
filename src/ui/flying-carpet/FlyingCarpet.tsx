import { IFlyingCarpet, TFlyingCarpetTemplates } from '@/schema/types';
import { FC } from 'react';
import { Container } from '../Container';
import { FlyingCarpet41 } from './flying-carpet-41/FlyingCarpet41';

type FlyingCarpetComponentType = typeof FlyingCarpet41;
const FlyingCarpetMap = new Map<
  TFlyingCarpetTemplates,
  FlyingCarpetComponentType
>();
FlyingCarpetMap.set('4-1', FlyingCarpet41);

export const FlyingCarpet: FC<IFlyingCarpet> = ({ template, ...rest }) => {
  console.log('FlyingCarpet', rest.backgroundColor);

  const FlyingCarpetComponent = FlyingCarpetMap.get(template);

  if (FlyingCarpetComponent) {
    return (
      <Container className='mb-16 lg:mb-24 px-0 pb-4'>
        <div className='aspect-[1/1] md:aspect-[2/1]'>
          <FlyingCarpetComponent template={template} {...rest} />
        </div>
      </Container>
    );
  }

  throw new Error(`FlyingCarpet template ${template} not found`);
};
