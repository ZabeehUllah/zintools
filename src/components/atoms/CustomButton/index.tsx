import React from 'react';

const CustomButton = ({
  text,
  bgColor,
  color,
}: {
  text: string;
  bgColor?: string;
  color: string;
}) => {
  return (
    <button className={`${bgColor} px-6 py-3 rounded-3xl ${color}`}>
      {text}
    </button>
  );
};

export default CustomButton;
