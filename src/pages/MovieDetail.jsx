import React from 'react'
import { CiShare2 } from "react-icons/ci";
import { IoMdPlay } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BiLike } from "react-icons/bi";
import { AiOutlineDislike } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { PiUserLight } from "react-icons/pi";

const MovieDetail = () => {
  return (
    <div>
        {/* large view */}
        <div className="hidden lg:block bg-[url('/images/kraven-the-hunter.jpg')] relative bg-cover bg-center h-[500px] w-full">
            <div className=" flex gap-3 absolute top-0 right-0 left-0 bottom-0 bg-black/50">   
                <button className='bg-black/40 px-4 py-2 flex gap-2 items-center rounded-lg absolute right-[130px] top-10'>
                    <CiShare2 className='text-white text-4xl' />
                    <p className='text-white font-semibold text-lg'>Share</p>
                </button>    
               <div className='w-[28%] flex justify-end items-center'>
                    <div>
                        <div className='h-[400px] relative rounded-t-lg'>
                            <img className='size-full object-cover rounded-t-lg' src="/images/kraven-thumb.avif" alt="" />
                            <div className='absolute xl:top-[200px] left-[100px] top-[230px] bg-black/50 rounded-full px-2 cursor-pointer'>
                                <p className=' text-white flex items-center text-[13px] '><IoMdPlay/> Trailers (5)</p>
                            </div>
                        </div>
                        <div className='bg-black text-white font-semibold text-center text-xs py-1 rounded-b-lg'>In cinemas</div>
                    </div>
               </div>
                <div className='w-[30%] flex justify-center items-center'>
                    <div>
                        <p className='text-white text-[30px] font-bold'>Kraven: The Hunter</p>
                        <div className='bg-zinc-800 rounded-lg p-3 flex items-center justify-between mt-5'>
                            <div className='flex gap-2 items-center'>
                                <FaStar className='text-red-400 text-2xl'/>
                                <p className='text-white text-lg font-semibold'>7.7/10 (1.4K Votes)</p>
                            </div>
                            <button className='bg-white px-4 py-1 rounded-lg text-lg font-semibold text-center'>
                                Rate now
                            </button>
                        </div>
                        <div className='mt-[30px]'>
                            <div className='bg-white/90 rounded-sm flex px-[10px] justify-between'>
                                <p className='hover:underline cursor-pointer'>2D,</p>
                                <p className='hover:underline cursor-pointer'>IMAX,</p>
                                <p className='hover:underline cursor-pointer'>2D,</p>
                                <p className='hover:underline cursor-pointer'>MX4D,</p>
                                <p className='hover:underline cursor-pointer'>2D SCREEN X,</p>
                                <p className='hover:underline cursor-pointer'>4DX</p>
                                <p className='hover:underline cursor-pointer'>ICE</p>
                            </div>
                            <div className='bg-white/90 rounded-sm flex px-[10px] justify-between mt-3 w-[260px]'>
                                <p className='hover:underline cursor-pointer'>ENGLISH,</p>
                                <p className='hover:underline cursor-pointer'>HINDI,</p>
                                <p className='hover:underline cursor-pointer'>TELUGU,</p>
                                <p className='hover:underline cursor-pointer'>TAMIL,</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-white mt-4 font-semibold text-[18px]' >2h 9m . <span className='hover:underline cursor-pointer'>Action,</span> <span className='hover:underline cursor-pointer'>Adventure,</span> <span className='hover:underline cursor-pointer'>Sci-Fi</span> . A . 1 Jan 2025</p>
                        </div>
                        <Link to='/movie-date-time'>
                        <div className='bg-purple-800 hover:bg-purple-900 rounded-md text-center font-semibold text-white py-3 cursor-pointer mt-4'>
                            <p>Book tickets</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>  
        </div>
        {/* mobile view */}
        <div className='lg:hidden mt-[60px] md:mt-[75px] border-b border-gray-300 pb-5'>
            <div className='p-5'>
                <div className='h-[200px] md:h-[240px] bg-red-500 relative rounded-t-lg'>
                    <img src="/images/kraven-the-hunter.jpg" className='rounded-t-lg object-cover size-full' alt="" />
                    <div className='absolute top-[50%] left-[40%] bg-black/50 rounded-full px-3 py-1 cursor-pointer'>
                        <p className=' text-white flex items-center text-xs '><IoMdPlay/> Trailers (5)</p>
                    </div>
                </div>
                <div className='bg-black text-white font-semibold text-center text-xs py-1 rounded-b-lg'>In cinemas</div>
            </div>
            <div className='mx-5 mb-5 flex items-center justify-between'>
                <p className='font-bold text-lg'>Kraven: The Hunter</p>
                <div className='size-7 border border-black/40 rounded-full bg-gray-200 flex items-center justify-center'>
                    <CiShare2 className='size-[70%]' />
                </div>
            </div>
            <div className='bg-gray-200 mx-5 mb-5 rounded-lg py-1 px-4 flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <FaStar className='text-purple-800 text-sm'/>
                    <p className='font-semibold text-xs'>7.7/10 (1.4K Votes)</p>
                </div>
                <button className='border text-purple-800 bg-white border-purple-800 px-1 py-1 rounded-lg text-xs font-semibold'>
                    Rate now
                </button>
            </div>
            <div className='mx-5 flex overflow-x-scroll gap-1'>
                <div className='bg-gray-300 rounded-sm text-xs p-1 '>
                    <p className='hover:underline cursor-pointer font-semibold'>2D,&nbsp;3D,&nbsp;ICE,&nbsp;4DX,&nbsp;4DX&nbsp;3D,&nbsp;IMAX&nbsp;2D,&nbsp;3D</p>
                </div>
                <div className='bg-gray-300 text-xs rounded-sm flex p-1 font-semibold'>
                    <p className='hover:underline cursor-pointer'>ENGLISH,&nbsp;HINDI,</p>
                </div>
            </div>
            <div className='mx-5 my-2'>
                <p className='text-black text-[13px]' >2h 9m . <span className='hover:underline cursor-pointer'>Action,</span> <span className='hover:underline cursor-pointer'>Adventure,</span> <span className='hover:underline cursor-pointer'>Sci-Fi</span> . A . 1 Jan 2025</p>
            </div>
            <div className='mx-5'>
                <p className='line-clamp-3 text-[15px]'>Sergei Kravinoff, a big game hunter, takes a magical serum that gives him superhuman abilities and a longer life.</p>
            </div>
        </div>
        <div className='lg:hidden mb-5 border-b border-gray-300 pb-5'>
            <div className='justify-between flex items-center my-4 px-5'>
                <p className='text-black font-semibold'>Top Reviews</p>
                <p className='text-red-500 text-xs flex items-center gap-1 cursor-pointer'>23.3k reviews <BsChevronRight className='text-xs'/></p>
            </div>  
            <p className='text-sm mb-3 mx-5'>Summary of 95 reviews.</p>
            <div className='flex overflow-x-scroll px-5 gap-3'>
                <div className='border border-gray-400 text-xs rounded-full px-[15px] flex justify-center gap-2 items-center'>
                    <p className='text-purple-800'>#GreatActing</p>
                    <div className='bg-gray-200 rounded-sm text-center px-1'>34576</div>
                </div>
                <div className='border border-gray-400 text-xs rounded-full px-[15px] flex justify-center gap-2 items-center py-1'>
                    <p className='text-purple-800'>#Wellmade</p>
                    <div className='bg-gray-200 rounded-sm text-center px-1'>1436</div>
                </div>
                <div className='border border-gray-400 text-xs rounded-full px-[15px] flex justify-center gap-2 items-center py-1'>
                    <p className='text-purple-800'>#SuperDirection
                    </p>
                    <div className='bg-gray-200 rounded-sm text-center px-1'>271</div>
                </div>
                <div className='border border-gray-400 text-xs rounded-full px-[15px] flex justify-center gap-2 items-center py-1'>
                    <p className='text-purple-800'>#AwesomeStory</p>
                    <div className='bg-gray-200 rounded-sm text-center px-1'>36</div>
                </div>
                <div className='border border-gray-400 text-xs rounded-full px-[15px] flex justify-center gap-2 items-center py-1'>
                    <p className='text-purple-800'>#Blockbuster</p>
                    <div className='bg-gray-200 rounded-sm text-center px-1'>36</div>
                </div>
            </div>
            <div className='mt-6 flex overflow-x-scroll gap-3 px-5'>
                <div className='border border-gray-300 rounded p-5'>
                    <div className='flex gap-[110px]'>
                        <div className='flex gap-3 items-center'>
                            <div className='border size-10 bg-gray-200 text-white flex items-center justify-center rounded-full'>
                                <PiUserLight className='size-[80%]'/>
                            </div>
                            <div>
                                <p className='text-sm'>Chigirl</p>
                                <p className='text-xs text-black/50'>Booked&nbsp;On&nbsp;Cinco</p>
                            </div>
                        </div>
                        <div className='flex gap-1 items-center font-semibold'>
                            <FaStar className='text-purple-800 text-xl'/>
                            <p className='text-sm'>9/10</p>
                        </div>
                    </div>
                    <div className='my-5'>
                        <p className='text-sm font-semibold text-black/50'>Kraven’s brutal hunts and Rhino’s destructive force make this Marvel movie unforgettable</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-5'>
                            <div className='flex gap-1 items-center text-black/70 font-semibold'>
                                <BiLike className='text-lg'/> 
                                <p className='text-xs'>111</p>
                            </div>
                            <div className='flex gap-1 items-center text-black/70 font-semibold'>
                                <AiOutlineDislike className='text-lg'/>
                                <p className='text-xs'>0</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='text-gray-300 text-sm'>Posted 2 days ago</p>
                            <CiShare2 className='text-xl'/>
                        </div>
                    </div>

                </div>
                <div className='border border-gray-300 rounded p-5'>
                    <div className='flex gap-[110px]'>
                        <div className='flex gap-3 items-center'>
                            <div className='border size-10 bg-gray-200 text-white flex items-center justify-center rounded-full'>
                                <PiUserLight className='size-[80%]'/>
                            </div>
                            <div>
                                <p className='text-sm'>Chigirl</p>
                                <p className='text-xs text-black/50'>Booked&nbsp;On&nbsp;Cinco</p>
                            </div>
                        </div>
                        <div className='flex gap-1 items-center font-semibold'>
                            <FaStar className='text-purple-800 text-xl'/>
                            <p className='text-sm'>9/10</p>
                        </div>
                    </div>
                    <div className='my-5'>
                        <p className='text-sm font-semibold text-black/50'>Kraven’s brutal hunts and Rhino’s destructive force make this Marvel movie unforgettable</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-5'>
                            <div className='flex gap-1 items-center text-black/70 font-semibold'>
                                <BiLike className='text-lg'/> 
                                <p className='text-xs'>111</p>
                            </div>
                            <div className='flex gap-1 items-center text-black/70 font-semibold'>
                                <AiOutlineDislike className='text-lg'/>
                                <p className='text-xs'>0</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='text-gray-300 text-sm'>Posted 2 days ago</p>
                            <CiShare2 className='text-xl'/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className='lg:hidden border-b border-gray-300 pb-5 mb-10'>
            <div className='mx-5 mb-4'>
                <p className='text-black font-semibold'>Cast</p>
            </div>
            <div className='flex overflow-x-scroll px-5 gap-3'>
                <div className='flex flex-col justify-center items-center w-[100px] text-center'>
                    <div className='size-20 bg-red-500 rounded-full'>
                        <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                    </div>
                    <p className='font-semibold text-sm'>Aaron&nbsp;Taylor-Johnson</p>
                    <p className='text-xs text-black/50'>as Sergei Kravinoff/ Kraven</p>
                </div>
                <div className='flex flex-col justify-center items-center w-[100px] text-center'>
                    <div className='size-20 bg-red-500 rounded-full'>
                        <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                    </div>
                    <p className='font-semibold text-sm'>Aaron&nbsp;Taylor-Johnson</p>
                    <p className='text-xs text-black/50'>as Sergei Kravinoff/ Kraven</p>
                </div>
                <div className='flex flex-col justify-center items-center w-[100px] text-center'>
                    <div className='size-20 bg-red-500 rounded-full'>
                        <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                    </div>
                    <p className='font-semibold text-sm'>Aaron&nbsp;Taylor-Johnson</p>
                    <p className='text-xs text-black/50'>as Sergei Kravinoff/ Kraven</p>
                </div>
                <div className='flex flex-col justify-center items-center w-[100px] text-center'>
                    <div className='size-20 bg-red-500 rounded-full'>
                        <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                    </div>
                    <p className='font-semibold text-sm'>Aaron&nbsp;Taylor-Johnson</p>
                    <p className='text-xs text-black/50'>as Sergei Kravinoff/ Kraven</p>
                </div>
                <div className='flex flex-col justify-center items-center w-[100px] text-center'>
                    <div className='size-20 bg-red-500 rounded-full'>
                        <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                    </div>
                    <p className='font-semibold text-sm'>Aaron&nbsp;Taylor-Johnson</p>
                    <p className='text-xs text-black/50'>as Sergei Kravinoff/ Kraven</p>
                </div>
                <div className='flex flex-col justify-center items-center w-[100px] text-center'>
                    <div className='size-20 bg-red-500 rounded-full'>
                        <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                    </div>
                    <p className='font-semibold text-sm'>Aaron&nbsp;Taylor-Johnson</p>
                    <p className='text-xs text-black/50'>as Sergei Kravinoff/ Kraven</p>
                </div>
            </div>
        </div>
        <div className='lg:hidden border-b border-t border-gray-300 py-5'>
            <div className='mx-5 mb-4'>
                <p className='text-black font-semibold'>Crew</p>
            </div>
            <div className='flex overflow-x-scroll px-5 gap-3'>
                <div className='flex flex-col justify-center items-center w-[100px] text-center'>
                    <div className='size-20 bg-red-500 rounded-full'>
                        <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                    </div>
                    <p className='font-semibold text-sm'>Aaron&nbsp;Taylor-Johnson</p>
                    <p className='text-xs text-black/50'>as Sergei Kravinoff/ Kraven</p>
                </div>
                <div className='flex flex-col justify-center items-center w-[100px] text-center'>
                    <div className='size-20 bg-red-500 rounded-full'>
                        <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                    </div>
                    <p className='font-semibold text-sm'>Aaron&nbsp;Taylor-Johnson</p>
                    <p className='text-xs text-black/50'>as Sergei Kravinoff/ Kraven</p>
                </div>
                <div className='flex flex-col justify-center items-center w-[100px] text-center'>
                    <div className='size-20 bg-red-500 rounded-full'>
                        <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                    </div>
                    <p className='font-semibold text-sm'>Aaron&nbsp;Taylor-Johnson</p>
                    <p className='text-xs text-black/50'>as Sergei Kravinoff/ Kraven</p>
                </div>
                <div className='flex flex-col justify-center items-center w-[100px] text-center'>
                    <div className='size-20 bg-red-500 rounded-full'>
                        <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                    </div>
                    <p className='font-semibold text-sm'>Aaron&nbsp;Taylor-Johnson</p>
                    <p className='text-xs text-black/50'>as Sergei Kravinoff/ Kraven</p>
                </div>
                <div className='flex flex-col justify-center items-center w-[100px] text-center'>
                    <div className='size-20 bg-red-500 rounded-full'>
                        <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                    </div>
                    <p className='font-semibold text-sm'>Aaron&nbsp;Taylor-Johnson</p>
                    <p className='text-xs text-black/50'>as Sergei Kravinoff/ Kraven</p>
                </div>
                <div className='flex flex-col justify-center items-center w-[100px] text-center'>
                    <div className='size-20 bg-red-500 rounded-full'>
                        <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                    </div>
                    <p className='font-semibold text-sm'>Aaron&nbsp;Taylor-Johnson</p>
                    <p className='text-xs text-black/50'>as Sergei Kravinoff/ Kraven</p>
                </div>
            </div>
        </div>
        <div className='lg:hidden'>
            <div className='justify-between flex items-center my-4 px-5'>
                <p className='text-black font-semibold'>You might also like</p>
                <p className='text-red-500 text-xs flex items-center gap-1 cursor-pointer'>View All <BsChevronRight className='text-xs'/></p>
            </div>
        </div>
        <div className='lg:hidden px-5 flex overflow-x-scroll gap-3 mb-10'>
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
            <div className='hidden md:block'>
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
        </div>
        {/* mobile view stop */}
        <div className='hidden lg:block max-w-[60%] ml-[150px]'>
            {/* large view */}
            <div className='hidden lg:block pb-9 border-b'>
                <p className='text-black text-[30px] font-bold mt-6 mb-3'>About the movie</p>
                <p>Sergei Kravinoff, a big game hunter, takes a magical serum that gives him superhuman abilities and a longer life.</p>
            </div>
            <div className='pb-9 hidden lg:block border-b'>
                <p className='text-black text-[30px] font-bold mt-6 mb-3'>Cast</p>
                <div className='grid grid-cols-6'>
                    <div className='flex flex-col justify-center items-center w-28 text-center'>
                        <div className='size-28 bg-red-500 rounded-full'>
                            <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                        </div>
                        <p className='font-semibold'>Aaron Taylor-Johnson</p>
                        <p className='text-sm text-black/50'>as Sergei Kravinoff/ Kraven</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-28 text-center'>
                        <div className='size-28 bg-red-500 rounded-full'>
                            <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                        </div>
                        <p className='font-semibold'>Aaron Taylor-Johnson</p>
                        <p className='text-sm text-black/50'>as Sergei Kravinoff/ Kraven</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-28 text-center'>
                        <div className='size-28 bg-red-500 rounded-full'>
                            <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                        </div>
                        <p className='font-semibold'>Aaron Taylor-Johnson</p>
                        <p className='text-sm text-black/50'>as Sergei Kravinoff/ Kraven</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-28 text-center'>
                        <div className='size-28 bg-red-500 rounded-full'>
                            <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                        </div>
                        <p className='font-semibold'>Aaron Taylor-Johnson</p>
                        <p className='text-sm text-black/50'>as Sergei Kravinoff/ Kraven</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-28 text-center'>
                        <div className='size-28 bg-red-500 rounded-full'>
                            <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                        </div>
                        <p className='font-semibold'>Aaron Taylor-Johnson</p>
                        <p className='text-sm text-black/50'>as Sergei Kravinoff/ Kraven</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-28 text-center'>
                        <div className='size-28 bg-red-500 rounded-full'>
                            <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-taylor-johnson-35626-1718003657.jpg" alt="" />
                        </div>
                        <p className='font-semibold'>Aaron Taylor-Johnson</p>
                        <p className='text-sm text-black/50'>as Sergei Kravinoff/ Kraven</p>
                    </div>
                </div>
            </div>
            <div className='pb-9 hidden lg:block border-b mb-5'>
                <p className='text-black text-[30px] font-bold mt-6 mb-3'>Crew</p>
                <div className='grid grid-cols-6'>
                    <div className='flex flex-col justify-center items-center w-28 text-center'>
                        <div className='size-28 rounded-full'>
                            <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jc-chandor-38298-1687242797.jpg" alt="" />
                        </div>
                        <p className='font-semibold'>J.C. Chandor</p>
                        <p className='text-sm text-black/50'>Director</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-28 text-center'>
                        <div className='size-28rounded-full'>
                            <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jc-chandor-38298-1687242797.jpg" alt="" />
                        </div>
                        <p className='font-semibold'>J.C. Chandor</p>
                        <p className='text-sm text-black/50'>Director</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-28 text-center'>
                        <div className='size-28 rounded-full'>
                            <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jc-chandor-38298-1687242797.jpg" alt="" />
                        </div>
                        <p className='font-semibold'>J.C. Chandor</p>
                        <p className='text-sm text-black/50'>Director</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-28 text-center'>
                        <div className='size-28rounded-full'>
                            <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jc-chandor-38298-1687242797.jpg" alt="" />
                        </div>
                        <p className='font-semibold'>J.C. Chandor</p>
                        <p className='text-sm text-black/50'>Director</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-28 text-center'>
                        <div className='size-28 rounded-full'>
                            <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jc-chandor-38298-1687242797.jpg" alt="" />
                        </div>
                        <p className='font-semibold'>J.C. Chandor</p>
                        <p className='text-sm text-black/50'>Director</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-28 text-center'>
                        <div className='size-28 rounded-full'>
                            <img className='rounded-full size-full object-cover' src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jc-chandor-38298-1687242797.jpg" alt="" />
                        </div>
                        <p className='font-semibold'>J.C. Chandor</p>
                        <p className='text-sm text-black/50'>Director</p>
                    </div>
                </div>
            </div>
            <div className='mb-9 hidden lg:block'>
                <div className='justify-between flex items-center my-4'>
                    <p className='text-black text-[30px] font-bold'>Top Reviews</p>
                    <p className='text-red-500 text-[17px] font-semibold flex items-center gap-1 cursor-pointer'>View All  <BsChevronRight size={12}/></p>
                </div>  
                <p>Summary of 95 reviews.</p>
                <div className='grid grid-cols-5 gap-2 mt-4'>
                    <div className='border border-gray-400 text-sm rounded-full px-[15px] flex justify-center gap-2 items-center py-2'>
                        <p className='text-red-400'>#GreatActing</p>
                        <div className='bg-gray-200 rounded-sm text-center px-1'>36</div>
                    </div>
                    <div className='border border-gray-400 text-sm rounded-full px-[15px] flex justify-center gap-2 items-center py-2'>
                        <p className='text-red-400'>#Wellmade</p>
                        <div className='bg-gray-200 rounded-sm text-center px-1'>136</div>
                    </div>
                    <div className='border border-gray-400 text-sm rounded-full px-[15px] flex justify-center gap-2 items-center py-2'>
                        <p className='text-red-400'>#SuperDirection
                        </p>
                        <div className='bg-gray-200 rounded-sm text-center px-1'>271</div>
                    </div>
                    <div className='border border-gray-400 text-sm rounded-full px-[15px] flex justify-center gap-2 items-center py-2'>
                        <p className='text-red-400'>#AwesomeStory</p>
                        <div className='bg-gray-200 rounded-sm text-center px-1'>36</div>
                    </div>
                    <div className='border border-gray-400 text-sm rounded-full px-[15px] flex justify-center gap-2 items-center py-2'>
                        <p className='text-red-400'>#Blockbuster</p>
                        <div className='bg-gray-200 rounded-sm text-center px-1'>36</div>
                    </div>
                </div>
                <div className='mt-6 grid grid-cols-2 gap-10'>
                    <div className='border border-gray-300 rounded p-[20px]'>
                        <div className='flex justify-between'>
                            <div className='flex gap-3 items-center'>
                                <div className='border size-10 bg-gray-200 text-white flex items-center justify-center rounded-full'>
                                    <PiUserLight className='size-[80%]'/>
                                </div>
                                <div>
                                    <p>Chigirl</p>
                                    <p className='text-sm text-black/50'>Booked On Cinco</p>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <FaStar className='text-red-400 text-2xl'/>
                                10/10
                            </div>
                        </div>
                        <div>
                            <p className='text-sm font-semibold text-black/50 mt-5'>Kraven’s brutal hunts and Rhino’s destructive force make this Marvel movie unforgettable</p>
                        </div>
                        <div className='flex items-center justify-between mt-[40px]'>
                            <div className='flex items-center gap-5'>
                                <div className='flex gap-1 items-center text-black/50 font-semibold'>
                                    <BiLike className='text-lg'/> 
                                    <p className='text-xs'>111</p>
                                </div>
                                <div className='flex gap-1 items-center text-black/50 font-semibold'>
                                    <AiOutlineDislike className='text-lg'/>
                                    <p className='text-xs'>0</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <p className='text-gray-300 text-sm'>Posted 2 days ago</p>
                                <CiShare2 className='text-xl'/>
                            </div>
                        </div>

                    </div>
                    <div className='border border-gray-300 rounded p-[20px]'>
                        <div className='flex justify-between'>
                            <div className='flex gap-3 items-center'>
                                <div className='border size-10 bg-gray-200 text-white flex items-center justify-center rounded-full'>
                                    <PiUserLight className='size-[80%]'/>
                                </div>
                                <div>
                                    <p>Chigirl</p>
                                    <p className='text-sm text-black/50'>Booked On Cinco</p>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <FaStar className='text-red-400 text-2xl'/>
                                10/10
                            </div>
                        </div>
                        <div>
                            <p className='text-sm font-semibold text-black/50 mt-5'>Kraven’s brutal hunts and Rhino’s destructive force make this Marvel movie unforgettable</p>
                        </div>
                        <div className='flex items-center justify-between mt-[40px]'>
                            <div className='flex items-center gap-5'>
                                <div className='flex gap-1 items-center text-black/50 font-semibold'>
                                    <BiLike className='text-lg'/> 
                                    <p className='text-xs'>111</p>
                                </div>
                                <div className='flex gap-1 items-center text-black/50 font-semibold'>
                                    <AiOutlineDislike className='text-lg'/>
                                    <p className='text-xs'>0</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <p className='text-gray-300 text-sm'>Posted 2 days ago</p>
                                <CiShare2 className='text-xl'/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='mb-[70px]'>
                <div className='justify-between flex'>
                    <p className='text-black text-[30px] font-bold mt-6 mb-3'>You might also like</p>
                    <p className='text-red-500 text-[17px] font-bold mt-6 mb-3 flex items-center gap-1 cursor-pointer'>View All  <BsChevronRight size={12}/></p>
                </div>
                <div className='flex overflow-x-scroll gap-3'>
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
                </div>
            </div>
        </div> 
        <div className='lg:hidden py-2 px-5 bg-white border-t shadow-xl z-10 fixed bottom-0 left-0 right-0'>
            <Link to='/movie-date-time'>
                <button className='w-full bg-purple-800 rounded-lg py-2 text-white'>Book tickets</button>  
            </Link>  
        </div>       
    </div>
  )
}

export default MovieDetail