import React from 'react'
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { FaLanguage } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { TfiTicket } from "react-icons/tfi";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";
import { LuTicketsPlane } from "react-icons/lu";
import { IoIosMailOpen } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";






const MovieDateTime = () => {
  return (
    <div>
        <div className='px-[100px] '>
            <p className='text-[38px]  mt-5'>Kraven: The Hunter (4DX) - English</p>
            <div className='flex gap-6 items-center'>
                <div className='rounded-full text-gray-400 border border-gray-800 h-[25px] w-[25px] mt-3' >
                    <p className='text-center'>A</p>
                </div>
                <div className='flex gap-3'>
                    <div className='rounded-full text-gray-400 border border-gray-500 h-[17px] w-[45px] mt-3' >
                        <p className='text-center text-[9px] mt-[2px]'>ACTION</p>
                    </div>
                    <div className='rounded-full text-gray-400 border border-gray-500 h-[17px] w-[65px] mt-3' >
                        <p className='text-center text-[9px] mt-[2px]'>ADVENTURE</p>
                    </div>
                    <div className='rounded-full text-gray-400 border border-gray-500 h-[17px] w-[40px] mt-3' >
                        <p className='text-center text-[9px] mt-[2px]'>SCI-FI</p>
                    </div>
                </div>
            </div>
        </div>
        <hr className='mt-[20px] border border-gray-200'/>
        <div className='px-[130px] flex  justify-between'>
            <div className='flex gap-4 relative mt-2'>
                <div className='hover:bg-red-500 rounded-lg px-4 py-1 '>
                    <p className='text-[11px]'>THU</p>
                    <p className='font-semibold text-[16px] mt-[-6px]'>02</p>
                    <p className='text-[11px] mt-[-4px]'>JAN</p>
                </div>
                <div className='hover:bg-red-500 rounded-lg px-4 py-1 '>
                    <p className='text-[11px]'>FRI</p>
                    <p className='font-semibold text-[16px] mt-[-6px]'>03</p>
                    <p className='text-[11px] mt-[-4px]'>JAN</p>
                </div>
                <div className='hover:bg-red-500 rounded-lg px-4 py-1 '>
                    <p className='text-[11px]'>SAT</p>
                    <p className='font-semibold text-[16px] mt-[-6px]'>04</p>
                    <p className='text-[11px] mt-[-4px]'>JAN</p>
                </div>
                <div className='hover:bg-red-500 rounded-lg px-4 py-1 '>
                    <p className='text-[11px]'>SUN</p>
                    <p className='font-semibold text-[16px] mt-[-6px]'>05</p>
                    <p className='text-[11px] mt-[-4px]'>JAN</p>
                </div>
                <div className='absolute flex gap-[250px] justify-between mt-4'>
                    <TfiAngleLeft className='ml-[-10px] cursor-pointer'/>
                    <TfiAngleRight className=' cursor-pointer'/>
                </div>
            </div>
            <div className='flex'>
                <div className='border-r-2 border-l-2 border-gray-400 cursor-pointer'>
                    <div className='flex gap-3 items-center py-4 px-1'>
                        <p className='font-semibold'>English-4DX</p>
                        <IoIosArrowDown size={15}/>
                    </div>
                </div>
                <div className='border-r-2  border-gray-400 cursor-pointer'>
                    <div className='flex gap-3 items-center py-5 px-1'>
                        <p className='font-semibold text-[10px]'>Filter Sub-Regions</p>
                        <IoIosArrowDown size={15}/>
                    </div>
                </div>
                <div className='border-r-2  border-gray-400 cursor-pointer'>
                    <div className='flex gap-3 items-center py-5 px-1'>
                        <p className='font-semibold text-[10px]'>Filter Price-Range</p>
                        <IoIosArrowDown size={15}/>
                    </div>
                </div>
                <div className='border-r-2  border-gray-400 cursor-pointer'>
                    <div className='flex gap-3 items-center py-5 px-1'>
                        <p className='font-semibold text-[10px]'>Filter Show-Timing</p>
                        <IoIosArrowDown size={15}/>
                    </div>
                </div>
                <div className='ml-3 mt-5 cursor-pointer'>
                    <BsSearch />
                </div>
            </div>
        </div>
        <div className='bg-gray-100 h-screen pt-3 px-[100px]'>
                <div className='bg-white '>
                    <div className='flex gap-2 justify-end pr-2 pb-1'>
                        <div className='flex gap-1 items-center'>
                            <GoDotFill color='green'/>
                            <p className='text-[9px]'>AVAILABLE</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <GoDotFill color='red'/>
                            <p className='text-[9px]'>FAST FILLING</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <FaLanguage color='green'/>
                            <p className='text-[9px]'>SUBTITLES LANGUAGE</p>
                        </div>
                    </div>
                    <hr  className='py-2'/>
                    <div>
                            <div className='flex gap-3 items-start p-[30px]'>
                                <div>
                                    <GiSelfLove/>
                                </div>
                                <div>
                                    <div className='flex gap-[70px] items-center'>
                                        <p className='text-[12px] font-semibold mb-4'>Cinepolis: Nexus Seawoods, Navi Mumbai</p>
                                        <div className='flex gap-1 items-center text-gray-400 mt-[-14px]'>
                                            <MdInfoOutline/>           
                                            <p className='text-[12px]'>INFO</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-6'>
                                        <div className='flex gap-1'>
                                            <TfiTicket color='green' size={20}/>
                                            <p>M-Ticket</p>
                                        </div>
                                        <div className='flex gap-1'>
                                            <IoFastFoodOutline color='orange' size={20}/>
                                            <p className='text-orange-400'>Food & Beverage</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-4 mt-2'>
                                        <div className='border border-gray-300 rounded-lg text-[11px] py-1 px-5'>
                                            <p className='text-green-400'>11:45 AM</p>
                                            <p className='text-gray-300'>DOLBY 7.1</p>
                                        </div>
                                        <div className='border border-gray-300 rounded-lg text-[11px] py-1 px-5'>
                                            <p className='text-green-400'>5:25 PM</p>
                                            <p className='text-gray-300'>DOLBY 7.1</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 items-center mt-3'>
                                        <GoDotFill color='yellow'/>
                                        <p className='text-gray-500 text-[13px]'>Non-cancellable </p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='flex gap-3 items-start pl-[30px] py-[20px]'>
                                <div>
                                    <GiSelfLove/>
                                </div>
                                <div>
                                    <div className='flex gap-[70px] items-center'>
                                        <p className='text-[12px] font-semibold mb-4'>Cinepolis: Nexus Seawoods, Navi Mumbai</p>
                                        <div className='flex gap-1 items-center text-gray-400 mt-[-14px]'>
                                            <MdInfoOutline/>           
                                            <p className='text-[12px]'>INFO</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-6'>
                                        <div className='flex gap-1'>
                                            <TfiTicket color='green' size={20}/>
                                            <p>M-Ticket</p>
                                        </div>
                                        <div className='flex gap-1'>
                                            <IoFastFoodOutline color='orange' size={20}/>
                                            <p className='text-orange-400'>Food & Beverage</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-4 mt-2'>
                                        <div className='border border-gray-300 rounded-lg text-[11px] py-1 px-5'>
                                            <p className='text-green-400'>11:45 AM</p>
                                            <p className='text-gray-300'>DOLBY 7.1</p>
                                        </div>
                                        <div className='border border-gray-300 rounded-lg text-[11px] py-1 px-5'>
                                            <p className='text-green-400'>5:25 PM</p>
                                            <p className='text-gray-300'>DOLBY 7.1</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 items-center mt-3'>
                                        <GoDotFill color='yellow'/>
                                        <p className='text-gray-500 text-[13px]'>Non-cancellable </p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='flex gap-3 items-start pl-[30px] pt-[20px]  pb-[70px]'>
                                <div>
                                    <GiSelfLove/>
                                </div>
                                <div>
                                    <div className='flex gap-[70px] items-center'>
                                        <p className='text-[12px] font-semibold mb-4'>Cinepolis: Nexus Seawoods, Navi Mumbai</p>
                                        <div className='flex gap-1 items-center text-gray-400 mt-[-14px]'>
                                            <MdInfoOutline/>           
                                            <p className='text-[12px]'>INFO</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-6'>
                                        <div className='flex gap-1'>
                                            <TfiTicket color='green' size={20}/>
                                            <p>M-Ticket</p>
                                        </div>
                                        <div className='flex gap-1'>
                                            <IoFastFoodOutline color='orange' size={20}/>
                                            <p className='text-orange-400'>Food & Beverage</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-4 mt-2'>
                                        <div className='border border-gray-300 rounded-lg text-[11px] py-1 px-5'>
                                            <p className='text-green-400'>11:45 AM</p>
                                            <p className='text-gray-300'>DOLBY 7.1</p>
                                        </div>
                                        <div className='border border-gray-300 rounded-lg text-[11px] py-1 px-5'>
                                            <p className='text-green-400'>5:25 PM</p>
                                            <p className='text-gray-300'>DOLBY 7.1</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 items-center mt-3'>
                                        <GoDotFill color='yellow'/>
                                        <p className='text-gray-500 text-[13px]'>Non-cancellable </p>
                                    </div>
                                </div>
                            </div>
                            
                    </div>
                </div>
                <div className='mt-[60px]'>
                    <p className='font-semibold text-[13px] text-gray-500'>Privacy Note</p>
                    <p className=' text-[11px] text-gray-500 mt-3'>By using www.bookmyshow.com(our website), you are fully accepting the Privacy Policy
                         available at <span className='underline text-red-400 cursor-pointer'>https://bookmyshow.com/privacy</span> governing your access to Bookmyshow and provision of
                          services by Bookmyshow to you. If you do not accept terms mentioned in the <span className='underline text-red-400 cursor-pointer'> Privacy Policy</span>, you must not share
                         any of your personal information and immediately exit Bookmyshow.</p>
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

export default MovieDateTime
