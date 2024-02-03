import React, { ReactNode } from 'react';
import Title from '../atoms/title';
import { ToPdf } from '../constants/data';

const ToolsLayout = ({
  text,
  showAll = false,
  children,
  isPdfFrom,
  handleShowAll,
}: {
  text: string;
  showAll?: boolean;
  isPdfFrom: boolean;
  children: ReactNode;
  handleShowAll?: () => void;
}) => {
  const headerClassName = isPdfFrom ? 'flex justify-between px-3' : '';
  return (
    <div className='bg-white py-8 px-6 my-4 rounded-3xl'>
      <div className={headerClassName}>
        <Title text={text} />
        {isPdfFrom && (
          <div
            className='flex rounded-2xl bg-zinc-300 gap-2 px-4 cursor-pointer font-semibold items-center'
            onClick={handleShowAll}
          >
            <span>{!showAll ? 'All' : 'Less'}</span>
            <img
              src='assets/show-all.svg'
              width='10px'
              height='10px'
              alt='show-all'
            />
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default ToolsLayout;
