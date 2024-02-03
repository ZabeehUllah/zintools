import React from 'react';

const NavigationItem = ({ href, text }: { href: string; text: string }) => (
  <li>
    <a
      className='block py-2 leading-6 hover:text-text-dark text-text-default text-default'
      href={href}
    >
      {text}
    </a>
  </li>
);

export default NavigationItem;
