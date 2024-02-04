import React, { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-[95%] m-auto'>
      <div className='mt-20 md:mt-48'>{children}</div>
    </div>
  );
};

export default MainLayout;
