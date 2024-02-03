import React from 'react';

const ThemeToggleButton = () => {
  return (
    <div className='hidden ml-auto md:block'>
      <button
        data-tooltip-id='ts-tooltip'
        data-tooltip-content='Change Theme'
        className='flex items-center justify-center w-12 rounded-full aspect-square text-text-dark bg-bg-controls-hover dark:bg-bg-controls'
      >
        <i className='icon theme-light'>
          <img src='/assets/light.svg' alt='' />
        </i>
      </button>
    </div>
  );
};

export default ThemeToggleButton;
