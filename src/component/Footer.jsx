import React from 'react'
import { FcCustomerSupport } from "react-icons/fc";
import { LuTicketsPlane } from "react-icons/lu";
import { IoIosMailOpen } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
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
  )
}

export default Footer