'use client';

import { Slider } from '@/ui/slider/Slider';
import { Modal } from '@/ui/modal';
import { FC, useState } from 'react';
import { ModalSlider } from '@/ui/modal-slider/ModalSlider';
import { IAsset } from '@/schema/types';

interface ISliderWithModalProps {
  galleryItems: IAsset[];
}
export const SliderWithModal: FC<ISliderWithModalProps> = ({
  galleryItems,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const onSlideClick = (index: number) => {
    setIsOpen(true);
    setSlideIndex(index);
  };

  return (
    <div className='mt-16'>
      <Slider items={galleryItems} onSlideClick={onSlideClick} />
      {isOpen && (
        <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
          <ModalSlider items={galleryItems} index={slideIndex} />
        </Modal>
      )}
    </div>
  );
};
