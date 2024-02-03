import React from 'react';

const MenuLinks = () => {
  const menuLinks = [
    { text: 'Privacy Policy', href: '/privacy/' },
    { text: 'Terms and conditions', href: '/terms/' },
    { text: 'Cookies Policy', href: '/cookies/' },
    { text: 'About us', href: '/about/' },
    { text: 'EULA', href: '/eula/' },
    { text: 'Contact', href: '/contact/' },
  ];

  return (
    <ul className='flex flex-wrap items-center gap-8 gap-y-2'>
      {menuLinks.map((link, index) => (
        <li key={index}>
          <a
            className='text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline'
            href={link.href}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuLinks;
