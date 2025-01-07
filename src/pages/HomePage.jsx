import React from 'react'
import { IoPlayCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Swipper from '../component/Swipper';

const HomePage = () => {
  return (
    <div className=''>
      <div className=' '>
        <div className=' mx-auto'>
          <Swipper/>
        </div>
      </div>
      <div className='lg:w-[90%] w-[93.4%] mx-auto mb-10'>
        <h1 className='lg:text-[26px] text-lg md:text-xl font-bold mb-2'>Recommended Movies</h1>
        <div className='lg:grid lg:grid-cols-5 flex overflow-x-scroll lg:overflow-hidden xl:gap-8 gap-3'>
          <Link to='/movie-detail'>
          <div>
            <div className='md:mb-2 h-[170px] w-[110px] xl:h-[320px] lg:h-[250px]  md:h-[230px] lg:w-full md:w-[150px]'>
              <img src="images/kraven-thumb.avif" alt="" className='rounded h-full' />
            </div>
            <div>
              <h1 className='font-semibold lg:text-lg md:text-[16px] leading-tight text-sm line-clamp-2'>Kraven: The Hunter</h1>
              <p className='text-gray-500 hidden md:block md:text-sm line-clamp-1'>Action/Adventure</p>
            </div>
          </div>
          </Link>
          <div className=''>
            <div className='md:mb-2 h-[170px] w-[110px] xl:h-[320px] lg:h-[250px]  md:h-[230px] lg:w-full md:w-[150px]'>
              <img src="/images/mufasa-thumb.avif" alt="" className='rounded h-full' />
            </div>
            <div>
              <h1 className='font-semibold lg:text-lg md:text-[16px] leading-tight text-sm line-clamp-2'>Mufasa: The Lion King</h1>
              <p className='text-gray-500 hidden md:block md:text-sm line-clamp-1'>Adventure/Animation</p>
            </div>
          </div>
          <div>
            <div className='md:mb-2 h-[170px] w-[110px] xl:h-[320px] lg:h-[250px] md:h-[230px] lg:w-full md:w-[150px]'>
              <img src="/images/sonic-thumb.avif" alt="" className='rounded h-full' />
            </div>
            <div>
              <h1 className='font-semibold lg:text-lg md:text-[16px] leading-tight text-sm line-clamp-2'>Sonic the Hedgehog</h1>
              <p className='text-gray-500 hidden md:block md:text-sm line-clamp-1'>Action/Thriller</p>
            </div>
          </div>
          <div>
            <div className='md:mb-2 h-[170px] w-[110px] xl:h-[320px] lg:h-[250px]  md:h-[230px] lg:w-full md:w-[150px]'>
              <img src="/images/the-night-thumb.avif" alt="" className='rounded h-full' />
            </div>
            <div className='mb-2'>
              <h1 className='font-semibold lg:text-lg md:text-[16px] leading-tight text-sm line-clamp-2'>The Night My Dad Saved Christmas</h1>
              <p className='text-gray-500 hidden md:block md:text-sm line-clamp-1'>Comedy/Family</p>
            </div>
          </div>
          <div>
            <div className='md:mb-2 h-[170px] w-[110px] xl:h-[320px] lg:h-[250px]  md:h-[230px] lg:w-full md:w-[150px]'>
              <img src="/images/the-wedding-thumb.avif" alt="" className='rounded h-full' />
            </div>
            <div>
              <h1 className='font-semibold lg:text-lg md:text-[16px] leading-tight text-sm line-clamp-2'>The Wedding Unplanner</h1>
              <p className='text-gray-500 hidden md:block md:text-sm line-clamp-1'>Comedy/Drama/Romantic</p>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-[90%] w-[93.4%] mx-auto mb-10'>
        <h1 className='lg:text-[26px] text-lg md:text-xl font-bold mb-2'>The Best of Live Events</h1>
        <div className='grid lg:grid-cols-5 grid-cols-4 xl:gap-7 gap-5'>
          <div>
            <img src="/images/amusement-live.avif" alt="" className='rounded-md' />
          </div>
          <div>
            <img src="/images/work-live.avif" alt="" className='rounded-md' />
          </div>
          <div>
            <img src="/images/kids-live.avif" alt="" className='rounded-md' />
          </div>
          <div>
            <img src="/images/comedy-live.avif" alt="" className='rounded-md' />
          </div>
          <div>
            <img src="/images/music-live.avif" alt="" className='rounded-md' />
          </div>
          <div>
            <img src="/images/comedy-live.avif" alt="" className='rounded-md' />
          </div>
          <div>
            <img src="/images/amusement-live.avif" alt="" className='rounded-md' />
          </div>
          <div>
            <img src="/images/work-live.avif" alt="" className='rounded-md' />
          </div>
        </div>
      </div>
      <div className='bg-purple-900 text-white md:py-7 py-5 mb-10'>
        <div className='hidden  xl:w-[80%] w-[90%] mx-auto md:flex items-center gap-1 xl:mb-12 mb-5 cursor-pointer'>
          <IoPlayCircle className='lg:text-6xl text-4xl text-white' />
          <div>
            <p className='font-bold lg:text-2xl md:text-xl text-sm text-white'>PREMIERE</p>
            <p className='text-xs text-white'>Watch new movies at home, every friday</p>
          </div>
        </div>
        <div className='xl:w-[80%] w-[90%] mx-auto'>
          <h1 className='lg:text-[26px] text-lg md:text-xl font-bold'>Premieres</h1>
          <p className='text-xs text-white font-semibold mb-2'>Brand new release every friday!</p>
          <div className='lg:grid lg:grid-cols-5 flex overflow-x-scroll lg:overflow-hidden xl:gap-7 gap-3'>
            <div>
              <div className='md:mb-2 h-[170px] w-[110px] xl:h-[320px] lg:h-[250px] md:h-[230px] lg:w-full md:w-[150px]'>
                <img src="/images/wicked-thumb.avif" alt="" className='rounded h-full' />
              </div>
              <div>
                <h1 className='font-semibold lg:text-lg md:text-[16px] leading-tight text-sm line-clamp-2'>Wicked</h1>
                <p className='line-clamp-1 lg:text-[16px] md:text-sm text-xs font-light leading-none'>English</p>
              </div>
            </div>
            <div>
              <div className='md:mb-2 h-[170px] w-[110px] xl:h-[320px] lg:h-[250px] md:h-[230px] lg:w-full md:w-[150px]'>
                <img src="/images/tre-thumb.avif" alt="" className='rounded h-full' />
              </div>
              <div>
                <h1 className='font-semibold lg:text-lg md:text-[16px] leading-tight text-sm line-clamp-2'>Three Men and a Ghost</h1>
                <p className='line-clamp-1 lg:text-[16px] md:text-sm text-xs font-light leading-none'>Italian</p>
              </div>
            </div>
            <div>
              <div className='md:mb-2 h-[170px] w-[110px] xl:h-[320px] lg:h-[250px] md:h-[230px] lg:w-full md:w-[150px]'>
                <img src="images/christmas-thumb.avif" alt="" className='rounded h-full' />
              </div>
              <div>
                <h1 className='font-semibold lg:text-lg md:text-[16px] leading-tight text-sm line-clamp-2'>Christmas Eve in Miller's Point</h1>
                <p className='line-clamp-1 lg:text-[16px] md:text-sm text-xs font-light leading-none'>English</p>
              </div>
            </div>
            <div>
              <div className='md:mb-2 h-[170px] w-[110px] xl:h-[320px] lg:h-[250px] md:h-[230px] lg:w-full md:w-[150px]'>
                <img src="/images/gladiator-thumb.avif" alt="" className='rounded h-full' />
              </div>
              <div>
                <h1 className='font-semibold lg:text-lg md:text-[16px] leading-tight text-sm line-clamp-2'>Gladiator</h1>
                <p className='line-clamp-1 lg:text-[16px] md:text-sm text-xs font-light leading-none'>English</p>
              </div>
            </div>
            <div>
              <div className='md:mb-2 h-[170px] w-[110px] xl:h-[320px] lg:h-[250px] md:h-[230px] lg:w-full md:w-[150px]'>
                <img src="/images/the-night-thumb.avif" alt="" className='rounded h-full' />
              </div>
              <div>
                <h1 className='font-semibold lg:text-lg md:text-[16px] leading-tight text-sm line-clamp-2'>The Night My Dad Saved Christmas</h1>
                <p className='line-clamp-1 lg:text-[16px] md:text-sm text-xs font-light leading-none'>Spanish</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage