"use client";

import {Slider} from "@/ui/slider/Slider";
import {Modal} from "@/ui/modal";
import {useState} from "react";
import {ModalSlider} from "@/ui/modal-slider/ModalSlider";

export const ReferenceGallery = ({galleryItems}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='mt-16'>
      <Slider items={galleryItems} />
      <button onClick={() => setIsOpen(true)}>
        Click to Open Modal
      </button>
      {isOpen && <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <ModalSlider items={galleryItems} />
      </Modal>}
    </div>
  )
}
