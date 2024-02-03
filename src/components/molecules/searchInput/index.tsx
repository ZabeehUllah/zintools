import React from 'react';
import { ChangeEvent } from 'react';
import Image from 'next/image';

const SearchInput = ({
  searchValue,
  onChange,
}: {
  searchValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <input
        type='text'
        placeholder='Search for Movies, TV Shows, Themes & Cast'
        className='min-h-[3rem] bg-gray-100 w-full rounded-3xl border-none outline-none px-4 pr-10'
        value={searchValue}
        onChange={(e) => onChange(e)}
      />
      <div className='absolute inset-y-0 right-0 flex items-center pr-3 py-2 pointer-events-none'>
        <div className='w-[0.1rem] h-full bg-gray-300'></div>{' '}
        <Image
          src='assets/search-icon.svg'
          className='px-2 font-bold'
          width={35}
          height={35}
          alt='logo'
        />
      </div>
    </>
  );
};

export default SearchInput;
