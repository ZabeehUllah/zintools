import React from 'react';
import NavigationItem from '@/components/atoms/NavigationItem';

interface ItemType {
  href: string;
  text: string;
}

const NavigationSection = ({
  title,
  items,
}: {
  title: string;
  items: ItemType[];
}) => (
  <div className='basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]'>
    <h3 className='pb-6 text-base font-semibold text-text-dark'>{title}</h3>
    <ul className='flex flex-col'>
      {items.map((item: ItemType, index: number) => (
        <NavigationItem key={index} {...item} />
      ))}
    </ul>
  </div>
);

export default NavigationSection;
