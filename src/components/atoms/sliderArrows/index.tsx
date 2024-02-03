import React from 'react';

const SliderArrows = (props: any) => {
  const { className, style, onClick, direction } = props;
  return (
    <img
      src={`assets/${direction}-arrow.svg`}
      className={className}
      style={{
        ...style,
        display: 'block',
        width: '30px',
        height: '30px',
        background: 'white',
      }}
      onClick={onClick}
    />
  );
};

export default SliderArrows;
