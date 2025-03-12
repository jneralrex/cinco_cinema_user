import React, { useEffect, useState } from 'react'
import { IoPlayCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Swipper from '../component/Swipper';
import Footer from '../component/Footer';
import axios from 'axios';
import Loader from '../component/Loader';

const HomePage = () => {
  const [all_movie_on_database, setAllMovieOnDatabase]= useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllMovieOnDatabase = async () => {
    try {
      const resp = await axios.get(`${import.meta.env.VITE_BASE_URL}movies/database`);
      // console.log(resp)
      if(resp.status === 200){
        setLoading(false);
        setAllMovieOnDatabase(resp.data.data);
        // setCurrentPage(resp.data.currentPage)
      }
    } catch (error) {
      console.log('Error fetching all movies from database', error)
    }
  };

  useEffect(()=>{
    fetchAllMovieOnDatabase()
  },[])
  return (
    <div className=''>
      <div className='mt-16 lg:my-10 mb-5 md:mt-24'>
        <div className='xl:w-[80%] lg:w-[90%] mx-auto'>
          <Swipper all_movie_on_database={all_movie_on_database} loading={loading}/>
        </div>
      </div>
      <div className='xl:w-[80%] w-[90%] mx-auto mb-10'>
        <h1 className='lg:text-[26px] text-lg md:text-xl font-bold mb-2'>Recommended Movies</h1>
        {
          loading ? (
            <div className='h-[300px]'><Loader /></div>
          ) :(
          <div className='lg:grid lg:grid-cols-5 flex overflow-x-scroll lg:overflow-hidden xl:gap-8 gap-3'>
            {
              all_movie_on_database?.length > 0 ? (
                all_movie_on_database.map((movie)=>(
                  <div key={movie._id} className='group'>
                      <Link to={`/movie-detail/${movie?._id}`}>
                        <div className='md:mb-2 h-[170px] w-[110px] xl:h-[320px] lg:h-[250px]  md:h-[230px] lg:w-full md:w-[150px]'>
                          <img src={movie?.thumbnail?.url} alt={movie?.title} className='rounded h-full' />
                        </div>
                      </Link>
                      <div className='relative mb-5'>
                        <Link to={`/cinema/${movie?.cinemaId?._id}`} className='absolute cursor-pointer hover:underline leading-none text-xs text-blue-500'>{movie?.cinemaId?.cinemaName} {"Cinema"}</Link>
                      </div>
                      <Link to={`/movie-detail/${movie?._id}`}>
                        <div>
                          <h1 className='font-semibold lg:text-lg md:text-[16px] leading-tight text-sm line-clamp-2 group-hover:underline'>{movie?.title}</h1>
                          <p className='text-gray-500 hidden md:block md:text-sm line-clamp-1'>{movie?.genre}</p>
                        </div>
                      </Link>
                    </div>
                ))
              ): (
                <p>No Movie Found</p>
              )
            }
          </div>
          )
        }
      </div>
      <div className='xl:w-[80%] w-[90%] mx-auto mb-10'>
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
      <div className='bg-purple-900 text-white md:py-7 py-5 pb-10'>
        <div className='hidden  xl:w-[80%] w-[90%] mx-auto md:flex items-center gap-1 xl:mb-12 mb-5 cursor-pointer'>
          <IoPlayCircle className='lg:text-6xl text-4xl text-white' />
          <div>
            <p className='font-bold lg:text-2xl md:text-xl text-sm text-white'>PREMIERE</p>
            <p className='text-xs text-white'>Watch new movies at home, every friday</p>
          </div>
        </div>
        <div className='xl:w-[80%] w-[90%] mx-auto'>
          <h1 className='lg:text-[26px] text-lg md:text-xl font-bold'>Premieres</h1>
          <p className='text-xs text-white font-semibold mb-2'>Brand new release every friday</p>
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
      <div className='lg:hidden'>
        <Footer/>
      </div>
    </div>
  )
}

export default HomePage