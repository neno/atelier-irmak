import { Module } from '@components/layout/Module';

export const Grid = () => {
  return (
    <Module>
      <div className='grid grid-cols-8'>
        <div className='bg-primary-light opacity-50 h-[100px]'></div>
        <div className='bg-gray h-[100px]'></div>
        <div className='bg-primary-light opacity-50 h-[100px]'></div>
        <div className='bg-gray h-[100px]'></div>
        <div className='bg-primary-light opacity-50 h-[100px]'></div>
        <div className='bg-gray h-[100px]'></div>
        <div className='bg-primary-light opacity-50 h-[100px]'></div>
        <div className='bg-gray h-[100px]'></div>
      </div>
    </Module>
  );
};
