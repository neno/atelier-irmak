import {ModalSlider} from "@/ui/modal-slider/ModalSlider";

export const Modal = ({items}) => {
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
          <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl sm:my-8 sm:w-full max-w-7xl sm:p-6">
            <ModalSlider items={items} />
          </div>
        </div>
      </div>
    </div>
  )
}
