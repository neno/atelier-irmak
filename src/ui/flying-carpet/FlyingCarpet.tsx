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

export const FlyingCarpet: FC<IFlyingCarpet> = ({
  template,
  text,
  mediaCollection,
  link,
}) => {
  const FlyingCarpetComponent = FlyingCarpetMap.get(template);

  if (FlyingCarpetComponent) {
    return (
      <Container className='my-16'>
        <div className='aspect-[1/1] md:aspect-[2/1]'>
          <FlyingCarpetComponent
            text={text}
            mediaCollection={mediaCollection}
            link={link}
            template={template}
          />
        </div>
      </Container>
    );
  }

  throw new Error(`FlyingCarpet template ${template} not found`);
};
