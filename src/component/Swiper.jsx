import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function Slider() {
  return (
    <Swiper
      spaceBetween={30} // Space between slides
      slidesPerView={1} // Number of slides visible at a time
      loop={true}       // Enable infinite loop
      autoplay={{
        delay: 3000,    // Delay between slides in milliseconds
        disableOnInteraction: false, // Autoplay continues after user interaction
      }}
      pagination={{ clickable: true }} // Enable pagination dots
    //   navigation={true} // Enable navigation arrows
      modules={[Autoplay, Navigation, Pagination]} // Load required modules
    >
      <SwiperSlide>
        <div className='relative md:h-[400px] flex justify-center items-center text-4xl text-white'>
            <img src="/images/mufasa.jpg" alt="slide 1" className='size-full ' />
            <div className=' absolute top-0 bottom-0 right-0 left-0 md:bg-black/70 xl:px-64 p-10'>
                <img src="/images/mufasa.jpg" alt="slide 1" className='hidden md:block size-full rounded-lg' />
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative md:h-[400px] flex justify-center items-center text-4xl text-white'>
            <img src="/images/gladiator.jpg" alt="slide 1" className='size-full' />
            <div className=' absolute top-0 bottom-0 right-0 left-0 md:bg-white/20 xl:px-64 p-10'>
                <img src="/images/gladiator.jpg" alt="slide 1" className='hidden md:block size-full rounded-lg' />
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative md:h-[400px] flex justify-center items-center text-4xl text-white'>
            <img src="/images/identity.jpg" alt="slide 1" className='size-full' />
            <div className=' absolute top-0 bottom-0 right-0 left-0 md:bg-black/70 xl:px-64 p-10'>
                <img src="/images/identity.jpg" alt="slide 1" className='hidden md:block size-full rounded-xl' />
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative md:h-[400px] flex justify-center items-center text-4xl text-white'>
            <img src="/images/sonic.jpg" alt="slide 1" className='size-full' />
            <div className=' absolute top-0 bottom-0 right-0 left-0 md:bg-white/10 xl:px-64 p-10'>
                <img src="/images/sonic.jpg" alt="slide 1" className='hidden md:block size-full rounded-lg' />
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative md:h-[400px] flex justify-center items-center text-4xl text-white'>
            <img src="/images/broker.jpg" alt="slide 1" className='size-full' />
            <div className=' absolute top-0 bottom-0 right-0 left-0 md:bg-black/70 xl:px-64 p-10'>
                <img src="/images/broker.jpg" alt="slide 1" className='hidden md:block size-full rounded-lg' />
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative md:h-[400px] flex justify-center items-center text-4xl text-white'>
            <img src="/images/marco.jpg" alt="slide 1" className='size-full' />
            <div className=' absolute top-0 bottom-0 right-0 left-0 md:bg-black/70 xl:px-64 p-10'>
                <img src="/images/marco.jpg" alt="slide 1" className='hidden md:block size-full rounded-lg' />
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
