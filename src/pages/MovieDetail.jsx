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

const MovieDetail = () => {
  return (
    <div>
        <div className="bg-[url('https://images.unsplash.com/photo-1696366167309-23f52e79409f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWUlMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D')] relative  bg-cover bg-center h-[500px] w-full">
            <div className="md:px-[50px] lg:px-[50px] xl:px-[150px] xl:flex xl:flex-row flex flex-col absolute inset-0 bg-gradient-to-r from-black to-transparent px-[10px] py-[10px] gap-[50px]">       
                <div className='bg-gray-700 px-[5px] py-1 xl:w-[130px] flex h-[27px] gap-2 rounded-lg xl:h-[60px] absolute  bottom-2 xl:right-[130px] xl:top-[30px]'>
                    <CiShare2 className='right-[80px] xl:h-[50px] xl:w-[90px] h-[20px] w-[20px]' color='white' />
                    <p className='text-white font-semibold  xl:text-[20px] text-[12px] xl:mt-[10px]'>Share</p>
                </div>
                <div className='relative'>
                    <img className='h-[250px] mt-[120px] ml-[70px] xl:mt-4 xl:ml-0 rounded-lg  md:h-[350px] lg:h-[370px] xl:h-[400px]' src="https://images.unsplash.com/photo-1696366167309-23f52e79409f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWUlMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div className='bg-black text-white font-semibold px-6 w-[265px] text-center text-[11px] py-1'>In cinemas</div>
                    <div className='absolute xl:top-[200px] left-[100px] top-[230px] bg-gray-700 rounded-full px-2 cursor-pointer'>
                        <p className=' text-white flex items-center text-[13px] '><IoMdPlay/> Trailers (5)</p>
                    </div>
                </div>
                <div className='mt-[30px]'>
                   <p className='text-white text-[30px] font-bold'>Kraven: The Hunter</p>
                   <div className='border border-white rounded-lg p-3 flex gap-[60px] mt-5'>
                        <div>
                            <div className='flex gap-2 items-center'>
                                <AiFillLike color='green' size={25}/>
                                <p className='text-white '>54.4k are interesrted</p>
                            </div>
                            <p className='text-white text-[9px]'>Are you interested in watching this movie?</p>
                        </div>
                        <div className='bg-white px-[5px] rounded-sm text-[12px] h-[25px] text-center'>
                                <p className='mt-1'>i'm interested</p>
                        </div>
                   </div>
                   <div className='mt-[40px]'>
                        <div className='bg-white rounded-sm flex px-[10px] gap-2'>
                            <p className='hover:underline cursor-pointer'>2D,</p>
                            <p className='hover:underline cursor-pointer'>IMAX,</p>
                            <p className='hover:underline cursor-pointer'>2D,</p>
                            <p className='hover:underline cursor-pointer'>MX4D,</p>
                            <p className='hover:underline cursor-pointer'>2D SCREEN X,</p>
                            <p className='hover:underline cursor-pointer'>4DX</p>
                            <p className='hover:underline cursor-pointer'>ICE</p>
                        </div>
                        <div className='bg-white rounded-sm flex px-[10px] gap-2 mt-3 w-[260px]'>
                            <p className='hover:underline cursor-pointer'>ENGLISH,</p>
                            <p className='hover:underline cursor-pointer'>HINDI,</p>
                            <p className='hover:underline cursor-pointer'>TELUGU,</p>
                            <p className='hover:underline cursor-pointer'>TAMIL,</p>
                        </div>
                   </div>
                   <div>
                        <p className='text-white mt-6 font-semibold text-[18px]' >2h 9m . <span className='hover:underline cursor-pointer'>Action,</span> <span className='hover:underline cursor-pointer'>Adventure,</span> <span className='hover:underline cursor-pointer'>Sci-Fi</span> . A . 1 Jan 2025</p>
                   </div>

                 <Link to='/movie-date-time'>
                 <div className='bg-red-500 rounded-md text-center text-white w-[180px] py-3 cursor-pointer mt-[50px]'>
                        <p>Book tickets</p>
                   </div>
                 </Link> 
                </div>
            </div>  
        </div>
        <div className='pl-[150px] pr-[440px]'>
            <div className='mb-9'>
                <p className='text-black text-[30px] font-bold mt-6 mb-3'>About the movie</p>
                <p>Sergei Kravinoff, a big game hunter, takes a magical serum that gives him superhuman abilities and a longer life.</p>
            </div>
            <hr />
            <div className='mb-9'>
                <p className='text-black text-[30px] font-bold mt-6 mb-3'>Cast</p>
                <div className='grid grid-cols-4 '>
                    <div className=' justify-center align-middle '>
                        <img className='rounded-full h-[120px] w-[120px] ml-[20px]' src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg" alt="" />
                        <div className='mt-3'>
                            <p >Aaron Taylor as Sergie</p>
                        </div>
                    </div>
                    <div className=' justify-center align-middle '>
                        <img className='rounded-full h-[120px] w-[120px] ml-[20px]' src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg" alt="" />
                        <div className='mt-3'>
                            <p >Aaron Taylor as Sergie</p>
                        </div>
                    </div>
                    <div className=' justify-center align-middle '>
                        <img className='rounded-full h-[120px] w-[120px] ml-[20px]' src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg" alt="" />
                        <div className='mt-3'>
                            <p >Aaron Taylor as Sergie</p>
                        </div>
                    </div>
                    <div className=' justify-center align-middle '>
                        <img className='rounded-full h-[120px] w-[120px] ml-[20px]' src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg" alt="" />
                        <div className='mt-3'>
                            <p >Aaron Taylor as Sergie</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <hr />
            <div className='mb-9'>
                <p className='text-black text-[30px] font-bold mt-6 mb-3'>Crew</p>
                <div className='grid grid-cols-4 '>
                    <div className=' justify-center align-middle '>
                        <img className='rounded-full h-[120px] w-[120px] ml-[20px]' src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg" alt="" />
                        <div className='mt-3'>
                            <p >Aaron Taylor as Sergie</p>
                        </div>
                    </div>
                    <div className=' justify-center align-middle '>
                        <img className='rounded-full h-[120px] w-[120px] ml-[20px]' src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg" alt="" />
                        <div className='mt-3'>
                            <p >Aaron Taylor as Sergie</p>
                        </div>
                    </div>
                    <div className=' justify-center align-middle '>
                        <img className='rounded-full h-[120px] w-[120px] ml-[20px]' src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg" alt="" />
                        <div className='mt-3'>
                            <p >Aaron Taylor as Sergie</p>
                        </div>
                    </div>
                    <div className=' justify-center align-middle '>
                        <img className='rounded-full h-[120px] w-[120px] ml-[20px]' src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg" alt="" />
                        <div className='mt-3'>
                            <p >Aaron Taylor as Sergie</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <hr />
            <div className='mb-9'>
                <div className='justify-between flex'>
                    <p className='text-black text-[30px] font-bold mt-6 mb-3'>Top Reviews</p>
                    <p className='text-red-500 text-[17px] font-bold mt-6 mb-3 flex items-center gap-1 cursor-pointer'>View All  <BsChevronRight size={12}/></p>
                </div>  
                <p>Summary of 95 reviews.</p>
                <div className='grid grid-cols-4 gap-2 mt-4'>
                    <div className='border border-gray-400 rounded-full px-[15px] flex gap-2 w-[150px] py-1'>
                        <p className='text-red-400'>#GreatActing</p>
                        <div className='bg-gray-400 rounded-sm text-center px-1'>36</div>
                    </div>
                    <div className='border border-gray-400 rounded-full px-[15px] flex gap-2 w-[180px] py-1'>
                        <p className='text-red-400'>#SuperDirection</p>
                        <div className='bg-gray-400 rounded-sm text-center px-1'>35</div>
                    </div>
                    <div className='border border-gray-400 rounded-full px-[15px] flex gap-2 w-[180px] py-1'>
                        <p className='text-red-400'>#SuperDirection</p>
                        <div className='bg-gray-400 rounded-sm text-center px-1'>35</div>
                    </div>
                    <div className='border border-gray-400 rounded-full px-[15px] flex gap-2 w-[150px] py-1'>
                        <p className='text-red-400'>#Wowmusic</p>
                        <div className='bg-gray-400 rounded-sm text-center px-1'>35</div>
                    </div>
                </div>
                <div className='mt-6 grid grid-cols-2 gap-[50px]'>
                    <div className='border border-gray-400 rounded-lg p-[20px]'>
                        <div className='flex gap-[90px]'>
                            <div className='flex gap-4 items-center'>
                                <CgProfile size={40} color='gray'/>
                                <div>
                                    <p>Chigirl</p>
                                    <p>Booked On Cinco</p>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <IoIosStar size={20} color='red'/>
                                10/10
                            </div>
                        </div>
                        <div>
                            <p className='font-semibold text-[18px] mt-5'>#Wowmusic #SuperDirection #GreatActing</p>
                        </div>
                        <div className='flex items-center gap-[110px] mt-[40px]'>
                            <div className='flex items-center gap-7'>
                                <div className='flex gap-2 items-center'>
                                    <BiLike/> 
                                    <p>111</p>
                                </div>
                                <div>
                                    <AiOutlineDislike/>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <p className='text-gray-200'>Posted 2 days ago</p>
                                <CiShare2 size={20}/>
                            </div>
                        </div>

                    </div>
                    <div className='border border-gray-400 rounded-lg p-[20px]'>
                        <div className='flex gap-[90px]'>
                            <div className='flex gap-4 items-center'>
                                <CgProfile size={40} color='gray'/>
                                <div>
                                    <p>Chigirl</p>
                                    <p>Booked On Cinco</p>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <IoIosStar size={20} color='red'/>
                                10/10
                            </div>
                        </div>
                        <div>
                            <p className='font-semibold text-[18px] mt-5'>#Wowmusic #SuperDirection #GreatActing</p>
                        </div>
                        <div className='flex items-center gap-[110px] mt-[40px]'>
                            <div className='flex items-center gap-7'>
                                <div className='flex gap-2 items-center'>
                                    <BiLike/> 
                                    <p>111</p>
                                </div>
                                <div>
                                    <AiOutlineDislike/>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <p className='text-gray-200'>Posted 2 days ago</p>
                                <CiShare2 size={20}/>
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
                <div className='grid grid-cols-4 gap-[20px]'>
                    <div className='relative cursor-pointer'>
                        <img className='h-[380px] w-[240px] rounded-lg' src="https://cdn.pixabay.com/photo/2023/11/20/23/06/woman-8402052_640.jpg" alt="" />
                        <p className='font-semibold ml-1'>Glagiator II</p>
                        <div className='flex gap-2 absolute bottom-[25px] items-center cursor-pointer bg-black px-[37px] py-2 rounded-b-lg'>
                            <IoIosStar color='red'/>
                            <p className='font-semibold text-white text-[15px]'>8.1/10  13.9k Votes</p>
                        </div>
                    </div>
                    <div className='relative cursor-pointer'>
                        <img className='h-[380px] w-[240px] rounded-lg' src="https://cdn.pixabay.com/photo/2023/11/30/01/38/vietnam-8420600_1280.jpg" alt="" />
                        <p className='font-semibold ml-1'>Sonic the Hedgehog 3</p>
                        <div className='flex gap-2 absolute bottom-[25px] items-center cursor-pointer bg-black px-[63px] py-2 rounded-b-lg'>
                            <AiFillLike color='green'/>
                            <p className='font-semibold text-white'>23k Likes</p>
                        </div>
                    </div>
                    <div className='relative cursor-pointer'>
                        <img className='h-[380px] w-[240px] rounded-lg' src="https://cdn.pixabay.com/photo/2023/11/20/23/06/woman-8402052_640.jpg" alt="" />
                        <p className='font-semibold ml-1'>Glagiator II</p>
                        <div className='flex gap-2 absolute bottom-[25px] items-center cursor-pointer bg-black px-[37px] py-2 rounded-b-lg'>
                            <IoIosStar color='red'/>
                            <p className='font-semibold text-white text-[15px]'>8.1/10  13.9k Votes</p>
                        </div>
                    </div>
                    <div className='relative cursor-pointer'>
                        <img className='h-[380px] w-[240px] rounded-lg' src="https://cdn.pixabay.com/photo/2023/11/30/01/38/vietnam-8420600_1280.jpg" alt="" />
                        <p className='font-semibold ml-1'>Sonic the Hedgehog 3</p>
                        <div className='flex gap-2 absolute bottom-[25px] items-center cursor-pointer bg-black px-[63px] py-2 rounded-b-lg'>
                            <AiFillLike color='green'/>
                            <p className='font-semibold text-white'>23k Likes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default MovieDetail