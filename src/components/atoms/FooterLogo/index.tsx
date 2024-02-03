import React from 'react';

const FooterLogo = () => {
  return (
    <a className='logo_wrap__Uh7uD' title='Go to home page' href='/'>
      <div className='relative flex items-center -mb-1 transition-colors first-line:dark:opacity-80'>
        <span className='pb-1.5 leading-none font-bold text-2xl md:text-3xl text-text-dark'>
          Similar
        </span>
        <span className='ml-1 flex items-center rounded-xl bg-text-dark min-h-[34px] md:min-h-[38px] px-2.5 mb-1 bg-black'>
          <span className='text-xl font-bold leading-none text-white md:text-xl dark:text-black'>
            Watch
          </span>
        </span>
      </div>
    </a>
  );
};

export default FooterLogo;
