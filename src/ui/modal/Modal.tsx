import {Slider} from "@/ui/slider/Slider";

export const Modal = ({items}) => {
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
          <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-7xl sm:p-6">
            <Slider items={items} />
          </div>
        </div>
      </div>
    </div>
  )
}
