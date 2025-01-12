import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-12 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full cursor-pointer"
    onClick={onClick}
  >
   <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-12 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full cursor-pointer"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const ImageSlider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const slides = [
    '/images/banner-01.png',
    '/images/banner-02.jpg',
    '/images/banner-01.png',
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full">
            <img
              src={slide}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
