import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Image = () => {
  const slides = [
    {
      url: 'https://i.nefisyemektarifleri.com/2023/02/03/bursa-gezilecek-yerler-listesi-doga-tarih-turizm-3.jpg ',
      title: 'Golyazi',
    },
    {
      url: 'https://www.bizevdeyokuz.com/wp-content/uploads/bursa-tarihi-yerler-ulu-cami.jpg',
      title: 'Ulucami',
    },
    {
      url: 'https://www.bizevdeyokuz.com/wp-content/uploads/emir-sultan-cami-bursa.jpg',
      title: 'Turbeler',
    },
    {
      url: 'https://www.bizevdeyokuz.com/wp-content/uploads/bursa-kozahan-avlu.jpg ',
      title: 'Hanlar',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 flex items-center justify-center'
        style={{ backgroundImage: `url(${slides[currentIndex].url})`, }}
      ></div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            className='text-2xl cursor-pointer'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image
