import React from 'react';
import ToolCard from '@/components/atoms/toolCard';

interface DataProp {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ToPdfSectionProps {
  data: DataProp[];
}

const ToPdfSection = ({ data }: ToPdfSectionProps) => {
  return (
    <div className='flex flex-wrap -mx-4 mt-2'>
      {data.map(({ id, image, title, description }) => {
        return (
          <div
            key={id}
            className=' mt-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/5 px-4 mb-8'
          >
            <ToolCard
              key={id}
              title={title}
              description={description}
              image={image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ToPdfSection;
