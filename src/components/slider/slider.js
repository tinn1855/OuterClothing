import React from 'react';
import Slider from 'react-slick';

// Import CSS mặc định cho slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,               // Hiển thị dấu chấm điều hướng
    infinite: true,           // Vòng lặp vô hạn
    speed: 1000,               // Tốc độ chuyển động (ms)
    slidesToShow: 1,          // Hiển thị 1 slide mỗi lần
    slidesToScroll: 1,        // Cuộn từng slide một
    autoplay: true,           // Tự động chạy
    autoplaySpeed: 3000,      // Thời gian giữa các slide
  };

  const slides = [
    '/images/banner-01.png',
    '/images/banner-02.jpg',
    '/images/banner-01.png'
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}  className="outline-none">
          <img
            src={slide}
            alt={`Slide ${index}`}
            className="outline-none"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
