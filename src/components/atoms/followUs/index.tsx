import React from 'react';
import { Socials } from '../../constants/data';
import SocialIcons from '../../atoms/socialIcons';

const FollowUs = () => {
  return (
    <div className='flex items-center gap-8 py-8'>
      <span className='text-base font-medium text-text-dark'>Follow us</span>
      <ul className='flex items-center gap-8'>
        {Socials.map(({ id, icon, url }) => (
          <SocialIcons key={id} icon={icon} url={url} />
        ))}
      </ul>
    </div>
  );
};

export default FollowUs;
