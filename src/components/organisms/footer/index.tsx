import React from 'react';
import FollowUs from '@/components/atoms/followUs';
import MainNavigation from '../MainNavigation';
import SecondaryNavigation from '../SecondaryNavigation';

const Footer = () => {
  return (
    <footer className='px-3 mt-[30px] bg-bg-footer'>
      <div className='w-full max-w-[1425px] mx-auto'>
        <FollowUs />
        <MainNavigation />
        <SecondaryNavigation />
      </div>
    </footer>
  );
};

export default Footer;
