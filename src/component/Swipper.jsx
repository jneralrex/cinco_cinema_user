import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Loader from './Loader';
import { Link } from 'react-router-dom';

function Swipper({ all_movie_on_database, loading }) {
  if(loading) return (
    <div className='h-[300px]'><Loader /></div>
  )
  return (
    <Swiper
      spaceBetween={30} // Space between slides
      slidesPerView={1} // Number of slides visible at a time
      loop={true}       // Enable infinite loop
      autoplay={{
        delay: 3000,    // Delay between slides in milliseconds
        disableOnInteraction: true, // Autoplay continues after user interaction
      }}
      pagination={{ clickable: true }} // Enable pagination dots
    //   navigation={true} // Enable navigation arrows
      modules={[Autoplay, Navigation, Pagination]} // Load required modules
    >
      {
        all_movie_on_database?.length > 0 ? (
          all_movie_on_database.map((movie)=>(
            <SwiperSlide key={movie._id}>
              <Link to={`/movie-detail/${movie?._id}`} className='relative md:h-[400px] flex justify-center items-center text-4xl text-white'>
                  <img src={movie?.banner?.url} alt={movie?.title} className='size-full ' />
                  <div className=' absolute top-0 bottom-0 right-0 left-0 md:bg-black/70 xl:px-64 p-10'>
                      <img src={movie?.banner?.url} alt={movie?.title} className='hidden md:block size-full rounded-lg' />
                  </div>
              </Link>
            </SwiperSlide>
          ))
        ): (
          <p>No Movie Found</p>
        )
      }
    </Swiper>
  );
}

export default Swipper;
