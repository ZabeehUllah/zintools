import React from 'react';
import NavigationSection from '@/components/molecules/Navigation';
import { internalLinks } from '@/components/constants/links';
import { enterpriseLinks } from '@/components/constants/links';

const MainNavigation = () => {
  return (
    <div className='flex flex-wrap items-start gap-2 py-10 border-t gap-y-8 border-t-clr-border'>
      <div className='basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]'>
        <NavigationSection title='Internal Links' items={internalLinks} />
      </div>
      <div className='basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]'>
        <NavigationSection title='Enterprise' items={enterpriseLinks} />
      </div>
      <div className='basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]'>
        <NavigationSection title='Internal Links' items={internalLinks} />
      </div>
      <div className='basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]'>
        <div className='basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]'>
          <NavigationSection title='Enterprise' items={enterpriseLinks} />
        </div>
      </div>
      <div className='basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]'>
        <NavigationSection title='Internal Links' items={internalLinks} />
      </div>
    </div>
  );
};

export default MainNavigation;
