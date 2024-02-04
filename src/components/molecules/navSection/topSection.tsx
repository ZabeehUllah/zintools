import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import Image from 'next/image';
import CustomButton from '../../atoms/CustomButton';
import SearchInput from '../searchInput';

const TopSection = ({
  searchValue,
  handleSearchValue,
}: {
  searchValue: string;
  handleSearchValue: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-6'>
        <div className='sm:flex lg:hidden'>
          <img src='assets/hamburger.svg' width={25} height={25} />
        </div>
        <div className='flex items-center gap-2 font-bold'>
          <Image src='assets/logo.svg' width={30} height={30} alt='logo' />
          <p>ZinTools</p>
        </div>
      </div>
      <div className='hidden md:flex w-1/3 relative'>
        <SearchInput searchValue={searchValue} onChange={handleSearchValue} />
      </div>
      <div className='w-1/12 md:hidden flex items-center'>
        <Image
          src='assets/search-icon.svg'
          className='px-2 font-bold'
          width={35}
          height={35}
          alt='logo'
        />
      </div>
      <div className='hidden lg:flex items-center gap-2 font-bold'>
        <CustomButton text={'Log in'} bgColor='bg-white' color={'text-black'} />
        <CustomButton
          text={'Sign up'}
          bgColor={'bg-blue-500'}
          color={'text-white'}
        />
      </div>
    </div>
  );
};

export default TopSection;
