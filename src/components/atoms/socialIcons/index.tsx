import React from 'react';

const SocialIcons = ({ icon, url }: { icon: string; url: string }) => {
  return (
    <li>
      <a href={url} className='text-text-default hover:text-text-dark'>
        <i className='icon'>
          <img src={`assets/${icon}.svg`} width={24} height={24} alt={icon} />
        </i>
      </a>
    </li>
  );
};

export default SocialIcons;
