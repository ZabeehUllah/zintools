import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import TopSection from '../../molecules/navSection/topSection';
import BottomSection from '../../molecules/navSection/bottomSection';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedLink, setSelectedLink] = useState<number | null>(null);

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleHoverStyle = (value: number | null): void => {
    setSelectedLink(value);
  };

  return (
    <header className='w-full max-h-[8.5rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white fixed top-0 px-10 py-4 flex flex-col z-50'>
      <TopSection
        searchValue={searchValue}
        handleSearchValue={handleSearchValue}
      />
      <BottomSection
        selectedLink={selectedLink}
        handleHoverStyle={handleHoverStyle}
      />
    </header>
  );
};

export default Navbar;
