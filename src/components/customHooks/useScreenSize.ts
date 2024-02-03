import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 520) {
      setSlidesToShow(1);
    } else if (screenWidth < 768) {
      setSlidesToShow(2);
    } else if (screenWidth < 992) {
      setSlidesToShow(3);
    } else if (screenWidth < 1050) {
      setSlidesToShow(4);
    } else {
      setSlidesToShow(5);
    }
  };

  useEffect(() => {
    updateSlidesToShow();

    window.addEventListener('resize', updateSlidesToShow);
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  return { slidesToShow };
};

export default useScreenSize;
