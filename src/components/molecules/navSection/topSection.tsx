import React from 'react';
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
  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-2 font-bold'>
        <Image src='assets/logo.svg' width={30} height={30} alt='logo' />
        <p>ZinTools</p>
      </div>
      <div className='w-1/3 relative'>
        <SearchInput searchValue={searchValue} onChange={handleSearchValue} />
      </div>
      <div className='flex items-center gap-2 font-bold'>
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
