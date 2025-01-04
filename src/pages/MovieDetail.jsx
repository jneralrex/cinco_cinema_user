import React from 'react'
import { CiShare2 } from "react-icons/ci";
import { IoMdPlay } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { FcCustomerSupport } from "react-icons/fc";
import { LuTicketsPlane } from "react-icons/lu";
import { IoIosMailOpen } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { BiLike } from "react-icons/bi";
import { AiOutlineDislike } from "react-icons/ai";
import { Link } from 'react-router-dom';

const MovieDetail = () => {
  return (
    <div>
        <div className="bg-[url('https://images.unsplash.com/photo-1696366167309-23f52e79409f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWUlMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D')] relative  bg-cover bg-center h-[500px] w-full">
            <div className="flex absolute inset-0 bg-gradient-to-r from-black to-transparent px-[150px] py-[30px] gap-[50px]">       
                <div className='bg-gray-700 px-[5px] py-1 w-[130px] flex gap-3 rounded-lg absolute right-[130px] top-[30px]'>
                    <CiShare2 className='right-[80px]' color='white' size={45}/>
                    <p className='text-white font-semibold text-[20px] mt-[10px]'>Share</p>
                </div>
                <div className='relative'>
                    <img className='h-[400px] rounded-lg ' src="https://images.unsplash.com/photo-1696366167309-23f52e79409f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWUlMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div className='bg-black text-white font-semibold px-6 w-[265px] text-center text-[11px] py-1'>In cinemas</div>
                    <div className='absolute top-[200px] left-[100px] bg-gray-700 rounded-full px-2 cursor-pointer'>
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

         <div className='bg-black text-white'>
                    <div className='flex bg-black text-white pl-[170px] py-[20px] relative'>
                        <div className='flex gap-4'>
                            <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="" />
                            <p className='font-semibold mt-2'> <span className='text-white font-bold'>List your shows</span>   Got a show,event,activity or a great experience? patner with us and get listed on CINCO</p>
                        </div>
                        <div className='px-2 py-2 rounded-lg bg-red-400 text-white right-[200px] absolute'>Contact today!</div>
                    </div>
                    <div className='px-[230px] flex justify-between bg-gray-800 py-4'>
                        <div className='cursor-pointer'>
                            <FcCustomerSupport  size={50} className='ml-[25px]'/>
                            <p className='text-[12px]'>24/7 Customer Care</p>
                        </div>
                        <div className='cursor-pointer'>
                            <LuTicketsPlane  size={50} className='ml-[45px]'/>
                            <p className='text-[12px]'>Resend Booking Confirmation</p>
                        </div>
                        <div className='cursor-pointer'>
                            <IoIosMailOpen  size={50} className='ml-[45px]'/>
                            <p className='text-[12px]'>Subscribe To The Newsletter </p>
                        </div>
                    </div>
                    <div className='bg-black text-gray-200 px-[170px] py-[20px]'>
                            <p className='mb-3 text-gray-500'>Upcoming Movies  </p>
                            <p className='text-[10px] text-gray-500 mb-8'>The Dark Knight | Avengers: Endgame | Mad Max: Fury Road | John Wick: Chapter 4 | Inception | The Grand Budapest Hotel | Superbad | Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan | The Hangover | Dumb and Dumber | Forrest Gump | The Shawshank Redemption | The Godfather | Parasite | 12 Years a Slave | Blade Runner 2049 | Interstellar | The Matrix | Dune | Star Wars: Episode V - The Empire Strikes Back | Toy Story | Spider-Man: Into the Spider-Verse | Finding Nemo | The Lion King | Frozen | Get Out | The Exorcist | Hereditary | A Quiet Place | It | The Notebook | Titanic | Pride and Prejudice | La La Land | Crazy Rich Asians</p>
                            <p className='mb-3 text-gray-500'>Movies Now Showing</p>
                            <p className='text-[10px] text-gray-500 mb-8'>Inception | The Dark Knight | Avengers: Endgame | Forrest Gump | The Godfather | Toy Story | The Shawshank Redemption | Spider-Man: Into the Spider-Verse | Titanic | Get Out</p>
                            <div className='flex gap-4 items-center justify-center mt-4'>
                                <FaFacebook  size={30} className='cursor-pointer'/>
                                <FaPinterestP  size={30} className='cursor-pointer'/>
                                <FaInstagram  size={30} className='cursor-pointer'/>
                                <BsTwitterX  size={30} className='cursor-pointer'/>
                                <IoLogoYoutube  size={30} className='cursor-pointer'/>
                                <FaLinkedinIn  size={30} className='cursor-pointer'/>
                            </div>
                            <p className='text-center text-gray-500 text-[10px] mt-4'>© 2025 CINCO. All rights reserved.
                            This content is protected by copyright laws. Unauthorized use, reproduction, or distribution is prohibited.</p>
                    </div>
                </div>
    </div>
  )
}

export default MovieDetail