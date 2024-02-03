import React from 'react';

interface ToolCadProps {
  image: string;
  title: string;
  description: string;
}

const ToolCard = ({ image, title, description }: ToolCadProps) => {
  return (
    <div className='text-black min-h-60 rounded-xl border border-gray-200 p-6 cursor-pointer transition-transform transform hover:shadow-[0px_8px_16px_#0000001a] hover:scale-103 hover:transition-shadow duration-900 ease-in-out'>
      <div>
        <img src={image} alt='' />
      </div>
      <div className='flex flex-col mt-4'>
        <p className='text-xl font-semibold'>{title}</p>
        <p className='text-sm text-zinc-700 mt-3'>{description}</p>
      </div>
    </div>
  );
};

export default ToolCard;
