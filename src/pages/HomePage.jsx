import React from 'react'
import Slider from '../component/swiper'
import { IoPlayCircle } from "react-icons/io5";

const HomePage = () => {
  return (
    <div className=''>
      <div className='sm:mt-0 mt-16 md:my-10 mb-5 sm:mb-0'>
        <div className='md:w-[80%] mx-auto'>
          <Slider />
        </div>
      </div>
      <div className='md:w-[80%] w-[90%] mx-auto mb-10'>
        <h1 className='md:text-[26px] text-lg font-bold mb-2'>Recommended Movies</h1>
        <div className='md:grid md:grid-cols-5 flex overflow-x-scroll md:overflow-hidden md:gap-7 gap-3'>
          <div>
            <div className='md:mb-2 h-[170px] w-[110px] md:h-[320px] md:w-full'>
              <img src="/images/sonic-thumb.avif" alt="" className='rounded h-full' />
            </div>
            <div>
              <h1 className='font-semibold md:text-lg text-sm line-clamp-2'>Sonic the Hedgehog</h1>
              <p className='text-gray-500 hidden md:block line-clamp-1'>Action/Thriller</p>
            </div>
          </div>
          <div className=''>
            <div className='md:mb-2 h-[170px] w-[110px] md:h-[320px] md:w-full'>
              <img src="/images/mufasa-thumb.avif" alt="" className='rounded h-full' />
            </div>
            <div>
              <h1 className='font-semibold md:text-lg text-sm line-clamp-2'>Mufasa: The Lion King</h1>
              <p className='text-gray-500 hidden md:block line-clamp-1'>Adventure/Animation</p>
            </div>
          </div>
          <div>
            <div className='md:mb-2 h-[170px] w-[110px] md:h-[320px] md:w-full'>
              <img src="images/kraven-thumb.avif" alt="" className='rounded' />
            </div>
            <div>
              <h1 className='font-semibold md:text-lg text-sm line-clamp-2'>Kraven: The Hunter</h1>
              <p className='text-gray-500 hidden md:block line-clamp-1'>Action/Adventure</p>
            </div>
          </div>
          <div>
            <div className='md:mb-2 h-[170px] w-[110px] md:h-[320px] md:w-full'>
              <img src="/images/the-night-thumb.avif" alt="" className='rounded' />
            </div>
            <div className='mb-2'>
              <h1 className='font-semibold md:text-lg text-sm line-clamp-2'>The Night My Dad Saved Christmas</h1>
              <p className='text-gray-500 hidden md:block line-clamp-1'>Comedy/Family</p>
            </div>
          </div>
          <div>
            <div className='md:mb-2 h-[170px] w-[110px] md:h-[320px] md:w-full'>
              <img src="/images/the-wedding-thumb.avif" alt="" className='rounded' />
            </div>
            <div>
              <h1 className='font-semibold md:text-lg text-sm line-clamp-2'>The Wedding Unplanner</h1>
              <p className='text-gray-500 hidden md:block line-clamp-1'>Comedy/Drama/Romantic</p>
            </div>
          </div>
        </div>
      </div>
      <div className='md:w-[80%] w-[90%] mx-auto mb-10'>
        <h1 className='md:text-[26px] text-lg font-bold mb-2'>The Best of Live Events</h1>
        <div className='grid md:grid-cols-5 grid-cols-4 md:gap-7 gap-3'>
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
        <div className='hidden  md:w-[80%] w-[90%] mx-auto md:flex items-center gap-1 md:mb-12 mb-5 cursor-pointer'>
          <IoPlayCircle className='md:text-6xl text-4xl text-white' />
          <div>
            <p className='font-bold md:text-2xl text-sm text-white'>PREMIERE</p>
            <p className='text-[10px] text-white'>Watch new movies at home, every friday</p>
          </div>
        </div>
        <div className='md:w-[80%] w-[90%] mx-auto'>
          <h1 className='md:text-[26px] text-xl font-bold leading-none'>Premieres</h1>
          <p className='text-xs text-white font-semibold mb-2'>Brand new release every friday</p>
          <div className='md:grid md:grid-cols-5 flex overflow-x-scroll md:overflow-hidden md:gap-7 gap-3'>
            <div>
              <div className='md:mb-2 h-[170px] w-[110px] md:h-[320px] md:w-full'>
                <img src="/images/wicked-thumb.avif" alt="" className='rounded' />
              </div>
              <div>
                <h1 className='font-semibold md:text-lg line-clamp-2 leading-tight mb-1 text-sm'>Wicked</h1>
                <p className='line-clamp-1 md:text-[16px] text-xs leading-none'>English</p>
              </div>
            </div>
            <div>
              <div className='md:mb-2 h-[170px] w-[110px] md:h-[320px] md:w-full'>
                <img src="/images/tre-thumb.avif" alt="" className='rounded' />
              </div>
              <div>
                <h1 className='font-semibold md:text-lg line-clamp-2 leading-tight mb-1 text-sm'>Three Men and a Ghost</h1>
                <p className='line-clamp-1 md:text-[16px] text-xs leading-none'>Italian</p>
              </div>
            </div>
            <div>
              <div className='md:mb-2 h-[170px] w-[110px] md:h-[320px] md:w-full'>
                <img src="images/christmas-thumb.avif" alt="" className='rounded' />
              </div>
              <div>
                <h1 className='font-semibold md:text-lg line-clamp-2 leading-tight mb-1 text-sm'>Christmas Eve in Miller's Point</h1>
                <p className='line-clamp-1 md:text-[16px] text-xs leading-none'>English</p>
              </div>
            </div>
            <div>
              <div className='md:mb-2 h-[170px] w-[110px] md:h-[320px] md:w-full'>
                <img src="/images/gladiator-thumb.avif" alt="" className='rounded' />
              </div>
              <div>
                <h1 className='font-semibold md:text-lg line-clamp-2 leading-tight mb-1 text-sm'>Gladiator</h1>
                <p className='line-clamp-1 md:text-[16px] text-xs leading-none'>English</p>
              </div>
            </div>
            <div>
              <div className='md:mb-2 h-[170px] w-[110px] md:h-[320px] md:w-full'>
                <img src="/images/the-night-thumb.avif" alt="" className='rounded' />
              </div>
              <div>
                <h1 className='font-semibold md:text-lg line-clamp-2 leading-tight mb-1 text-sm'>The Night My Dad Saved Christmas</h1>
                <p className='line-clamp-1 md:text-[16px] text-xs leading-none mb-2'>Spanish</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage