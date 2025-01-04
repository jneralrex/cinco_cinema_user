import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";
import { LuTicketsPlane } from "react-icons/lu";
import { IoIosMailOpen } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";





const ProfilePage = () => {

    const [showEdit, setShowEdit] = useState(false)

    const[inputValue, setInputValue] = useState({
        email:"",
        phone:"",
        first_name:"",
        last_name:"",
        birthday:"",
        identity:"",
        married:"",
        area:"",
        address1:"",
        address2:"",
        landmark:"",
        town:"",
    })
    const[inputValueError, setInputValueError] = useState({
        email:"",
        phone:"",
        first_name:"",
        last_name:"",
        birthday:"",
        identity:"",
        married:"",
        area:"",
        address1:"",
        address2:"",
        landmark:"",
        town:"",
    })

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const formValidate = () => {
        const newError = {};

        if (inputValue.email === "") {
            newError.email = "Email cannot be empty";
        } else if (!validateEmail(inputValue.email)) {
            newError.email = "Invalid email format";
        }
        
        if (inputValue.phone === "") {
            newError.phone = "Phone number cannot be empty";
        } else if (isNaN(inputValue.phone)) {
            newError.phone = "Phone number must be numeric";
        }

        if (inputValue.first_name === "") {
            newError.first_name = "First name cannot be empty";
        } else if (!isNaN(inputValue.first_name)) {
            newError.first_name = "Invalid name (numbers not allowed)";
        }

        if (inputValue.last_name === "") {
            newError.last_name = "Last name cannot be empty";
        } else if (!isNaN(inputValue.last_name)) {
            newError.last_name = "Invalid name (numbers not allowed)";
        }

        

        setError(newError);

        return Object.keys(newError).length === 0;
    };
  return (
    <div >
        <div className='bg-gray-200 gap-3 pl-[170px] flex '>
            <p className='cursor-pointer hover:bg-gray-300 px-2 py-2'>Your Orders</p>
            <p className='cursor-pointer hover:bg-gray-300 px-2 py-2'>Stream Library</p>
            <p className='cursor-pointer hover:bg-gray-300 px-2 py-2'>QuikPay</p>
            <p className='cursor-pointer hover:bg-gray-300 px-2 py-2'>Rewards</p>
            <p className='cursor-pointer hover:bg-gray-300 px-2 py-2'>Profile</p>
            <p className='cursor-pointer hover:bg-gray-300 px-2 py-2'>Saved Devices</p>
        </div>
        {
            !showEdit &&(
            <div className='hide bg-gray-100 pt-4'>
                <form className='w-[700px]  justify-center items-center ml-[400px]  '>
                        <div className='relative bg-gradient-to-l from-red-400 to-black h-[100px] flex rounded-t-md'>
                            <div className='absolute gap-5 flex top-7 left-9'>
                                <div className='rounded-full h-[100px] w-[100px] bg-white '> 
                                        <img className='rounded-full h-[100px] w-[100px]' src="https://cdn.pixabay.com/photo/2022/03/28/14/37/boy-7097685_640.jpg" alt="" />
                                </div>
                                <p className='text-white mt-[30px] font-bold text-[20px]'>Hi, Guest</p>
                            </div>
                        </div>
                        <div className='py-[60px] px-[40px] bg-white rounded-md'>
                            <p className='font-semibold font-sans text-[18px] mb-[20px]'>Account Details</p>
                            <div className='flex gap-[170px] relative'>
                                <div>
                                    <p className='mb-[20px]'>Email Address</p>
                                    <p>Mobile Number</p>
                                </div>
                                <div>
                                    <p className='mb-[20px]'>liadijoy@gmail.com</p>
                                    <p>+2348186415722</p>
                                </div>
                                <div onClick={()=>setShowEdit(true)} className='absolute left-[550px] cursor-pointer flex items-center align-middle text-red-500'><CiEdit /> Edit</div>
                            </div>
                        </div>
                        <div className='py-[60px] px-[40px] bg-white mt-5 rounded-md'>
                            <p className='font-semibold font-sans text-[18px] mb-[20px]'>Personal Details</p>
                            <div className='flex gap-[210px]'>
                                <div>
                                    <p className='mb-[15px]'>First Name</p>
                                    <p className='mb-[15px]'>Last Name</p>
                                    <p className='mb-[15px]'>Birthday</p>
                                    <p className='mb-[15px]'>Identity</p>
                                    <p className='mb-[15px]'>Married</p>
                                </div>
                                <div>
                                    <p className='mb-[15px]'>Jackson </p>
                                    <p className='mb-[15px]'>Emmanuel</p>
                                    <p className='mb-[15px]'>8-18-2001</p>
                                    <p className='mb-[15px]'>male</p>
                                    <p className='mb-[15px]'>false</p>
                                </div>
                            </div>  
                        </div>
                        <div className='py-[60px] px-[40px] bg-white mt-5 rounded-md mb-3'>
                            <p className='font-semibold font-sans text-[18px] mb-[20px]'>Address (Optional)</p>
                            <div className='flex gap-[180px]'>
                                <div>
                                    <p className='mb-[15px]'>Area pincode</p>
                                    <p className='mb-[15px]'>Address LIne 1</p>
                                    <p className='mb-[15px]'>Address LIne 2</p>
                                    <p className='mb-[15px]'>Landmark</p>
                                    <p className='mb-[15px]'>Town/City</p>
                                </div>
                                <div>
                                    <p className='mb-[15px]'>875883593 </p>
                                    <p className='mb-[15px]'>N0 23 poot street</p>
                                    <p className='mb-[15px]'>Area, Colony</p>
                                    <p className='mb-[15px]'>Theater</p>
                                    <p className='mb-[15px]'>Mumbai</p>
                                </div>
                            </div>  

                        </div>

                        <p className='text-center text-[10px] py-3'>I agree with <span className='underline cursor-pointer'>terms and conditions</span> and <span className='underline cursor-pointer'>privacy policy</span></p>
                </form>
            </div>

            )
        }
        {    
                showEdit && (
             <div className='show bg-gray-100 pt-4'>
             <form className='w-[700px]  justify-center items-center ml-[400px] relative '>
                     <div className='relative bg-gradient-to-l from-red-400 to-black h-[100px] flex rounded-t-md'>
                         <div className='absolute gap-5 flex top-7 left-9'>
                             <div className='rounded-full h-[100px] w-[100px] bg-white '> 
                                     <img className='rounded-full h-[100px] w-[100px]' src="https://cdn.pixabay.com/photo/2022/03/28/14/37/boy-7097685_640.jpg" alt="" />
                             </div>
                             <p className='text-white mt-[30px] font-bold text-[20px]'>Hi, Guest</p>
                         </div>
                     </div>
                     <div className='py-[60px] px-[40px] bg-white rounded-md'>
                         <p className='font-semibold font-sans text-[18px] mb-[20px]'>Account Details</p>
                         <div className='flex gap-[180px]'>
                             <div>
                                 <p className='mb-[40px]'>Email Address</p>
                                 <p>Mobile Number</p>
                             </div>
                             <div className='flex flex-col'>
                                <input className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Enter Email Address'/>
                                <input className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Enter Mobile Number'/>
                             </div>
                         </div>
                     </div>
                     <div className='py-[60px] px-[40px] bg-white mt-5 rounded-md'>
                         <p className='font-semibold font-sans text-[18px] mb-[20px]'>Personal Details</p>
                         <div className='flex gap-[210px]'>
                             <div>
                                 <p className='mb-[37px]'>First Name</p>
                                 <p className='mb-[37px]'>Last Name</p>
                                 <p className='mb-[37px]'>Birthday</p>
                                 <p className='mb-[37px]'>Identity</p>
                                 <p className='mb-[15px]'>Married</p>
                             </div>
                             <div className='flex flex-col'>
                                 <input className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Enter First Name here'/>
                                 <input className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Enter Last Name here'/>
                                 <input className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="date" />
                                 <select className='mb-[15px] px-3 py-2 border border-black rounded-lg' name="" id="">
                                    <option value="">Select Identity</option>
                                    <option value="Woman">Woman</option>
                                    <option value="Man">Man</option>
                                 </select>
                                 <select className='mb-[15px] px-3 py-2 border border-black rounded-lg' name="" id="">
                                    <option value="">Select Status</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                 </select>
                             </div>
                         </div>  
                     </div>
                     <div className='py-[60px] px-[40px] bg-white mt-5 rounded-md mb-3'>
                         <p className='font-semibold font-sans text-[18px] mb-[20px]'>Address (Optional)</p>
                         <div className='flex gap-[180px]'>
                             <div>
                                 <p className='mb-[37px]'>Area pincode</p>
                                 <p className='mb-[37px]'>Address LIne 1</p>
                                 <p className='mb-[37px]'>Address LIne 2</p>
                                 <p className='mb-[37px]'>Landmark</p>
                                 <p className='mb-[15px]'>Town/City</p>
                             </div>
                             <div className='flex flex-col'>
                                 <input className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Eg 508765'/>
                                 <input className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Flat no, House no,Building'/>
                                 <input className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Area, Colony, Street'/>
                                 <input className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Eg Utt theater'/>
                                 <input className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Mumbai'/>
                             </div>
                         </div>  
                        <button className='bg-gradient-to-l from-red-400 to-black rounded-md px-2 text-[13px] text-white absolute right-[100px] bottom-[80px]'>SUBMIT</button>
                     </div>
 
                     <p className='text-center text-[10px] py-3'>I agree with <span className='underline cursor-pointer'>terms and conditions</span> and <span className='underline cursor-pointer'>privacy policy</span></p>
             </form>
         </div>)
        }
        <div>
            <p className='text-gray-500 pl-[170px] text-[12px] py-3 flex'>Online ticket <FaLongArrowAltRight size={15}  className='mt-[2px] px-1'/> Profile Edit</p>
        </div>
        <div className='bg-gray-100 px-[170px] mb-[15px]'>
            <p className='font-semibold py-[10px]'>Privacy Note</p>
            <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis exercitationem doloremque voluptates sit 
                impedit officia suscipit ipsam dolore maiores,
                 voluptas blanditiis inventore animi molestiae dolores quibusdam ex necessitatibus, tenetur dolorum.</p>
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

export default ProfilePage