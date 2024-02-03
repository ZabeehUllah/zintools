import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderArrows from '@/components/atoms/sliderArrows';
import { FromPdf } from '@/components/constants/data';
import ToolCard from '@/components/atoms/toolCard';
import useScreenSize from '@/components/customHooks/useScreenSize';

const FromPdfSection = () => {
  const { slidesToShow } = useScreenSize();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SliderArrows direction={'right'} />,
    prevArrow: <SliderArrows direction={'left'} />,
  };

  return (
    <Slider {...settings}>
      {FromPdf.map(({ id, title, description, image }) => {
        return (
          <ToolCard
            key={id}
            title={title}
            description={description}
            image={image}
          />
        );
      })}
    </Slider>
  );
};

export default FromPdfSection;
