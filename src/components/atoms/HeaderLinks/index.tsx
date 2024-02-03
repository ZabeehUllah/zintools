import React from 'react';

const HeaderLinks = ({
  index,
  link,
  isSelected,
  handleHoverStyle,
}: {
  index: number;
  link: string;
  isSelected: boolean;
  handleHoverStyle: (index: number | null) => void;
}) => {
  return (
    <span
      key={index}
      onMouseOver={() => handleHoverStyle(index)}
      onMouseOut={() => handleHoverStyle(null)}
      className={`cursor-pointer pb-[0.9rem] ${
        isSelected ? 'border-b-2 border-blue-500' : 'border-none'
      }`}
    >
      {link}
    </span>
  );
};

export default HeaderLinks;
