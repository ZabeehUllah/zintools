import React from 'react';
import FooterLogo from '@/components/atoms/FooterLogo';
import ThemeToggleButton from '@/components/atoms/ThemeToggleButton';
import MenuLinks from '@/components/molecules/MenuLinks';

const SecondaryNavigation = () => {
  return (
    <div className='flex flex-wrap items-center gap-6 pt-6 pb-10 border-t md:pb-12 md:pt-8 md:gap-8 border-t-clr-border'>
      <div className='flex items-center'>
        <FooterLogo />
        <div className='md:hidden'>
          <ThemeToggleButton />
        </div>
      </div>
      <MenuLinks />
      <div className='hidden ml-auto md:block'>
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default SecondaryNavigation;
