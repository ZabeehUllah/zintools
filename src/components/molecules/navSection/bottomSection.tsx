import React from 'react';
import HeaderLinks from '../../atoms/HeaderLinks';
import { NavLinks } from '../../constants/links';

const BottomSection = ({
  selectedLink,
  handleHoverStyle,
}: {
  selectedLink: number | null;
  handleHoverStyle: (index: number | null) => void;
}) => {
  return (
    <div className='hidden lg:flex gap-10 mt-8 ml-5'>
      {NavLinks.map((link, index) => {
        const isSelected = selectedLink === index;
        return (
          <HeaderLinks
            key={index}
            link={link}
            index={index}
            isSelected={isSelected}
            handleHoverStyle={() => handleHoverStyle(index)}
          />
        );
      })}
    </div>
  );
};

export default BottomSection;
