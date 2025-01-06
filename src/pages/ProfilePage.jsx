import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";






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
        if (inputValue.birthday === "") {
            newError.birthday = "birthday cannot be empty";
        }
        if (inputValue.identity === "") {
            newError.identity = "identity cannot be empty";
        }
        if (inputValue.married === "") {
            newError.married = "married cannot be empty";
        }
        if (inputValue.area === "") {
            newError.area = "area cannot be empty";
        }
        if (inputValue.address1 === "") {
            newError.address1 = "address cannot be empty";
        }
        if (inputValue.address2 === "") {
            newError.address2 = "address cannot be empty";
        }
        if (inputValue.landmark === "") {
            newError.landmark = "landmark cannot be empty";
        }
        if (inputValue.town === "") {
            newError.town = "town/city cannot be empty";
        }
        setInputValueError(newError);
        return Object.keys(newError).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formValidate()) {
            try {         
                // const res = await axios.post(`${base_url}/users`, inputValue);
                // if (res.status !== 200){
                //   throw new Error("Error posting user details");
                // }
                // if(res.data.code === 304){
                //   throw new Error("Email Already Exist");
                // }
                // window.location.href="/login"
                // console.log('Form submitted', res.data);
                alert('Form Editted Successful');
                window.location.reload();
            } catch (error) {
                console.error(error.message);
            }
        } else {
            console.log('Form validation failed');
        }
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
             <form onSubmit={handleSubmit} className='w-[700px]  justify-center items-center ml-[400px] relative '>
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
                                <div>
                                    <input name='email' value={inputValue.email} className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Enter Email Address' onChange={handleChange}/>
                                    {inputValueError.email&& <p className='text-red-700 text-[9px] absolute mt-[-14px]'>{inputValueError.email}</p>}
                                </div>
                                <div>
                                    <input name='phone' value={inputValue.phone} className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Enter Mobile Number' onChange={handleChange}/>
                                    {inputValueError.phone&& <p className='text-red-700 text-[9px] absolute mt-[-14px]'>{inputValueError.phone}</p>}
                                </div>
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
                                <div>
                                    <input name='first_name' value={inputValue.first_name} className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Enter First Name here' onChange={handleChange}/>
                                    {inputValueError.first_name&& <p className='text-red-700 text-[9px] absolute mt-[-14px]'>{inputValueError.first_name}</p>}
                                </div>
                                <div>
                                    <input name='last_name' value={inputValue.last_name} className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Enter Last Name here' onChange={handleChange}/>
                                    {inputValueError.last_name&& <p className='text-red-700 text-[9px] absolute mt-[-14px]'>{inputValueError.last_name}</p>}
                                </div>
                                <div>
                                    <input name='birthday' value={inputValue.birthday} className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="date" onChange={handleChange}/>
                                    {inputValueError.birthday&& <p className='text-red-700 text-[9px] absolute mt-[-14px]'>{inputValueError.birthday}</p>}
                                </div>
                                <div>
                                    <select  className='mb-[15px] px-3 py-2 border border-black rounded-lg' name="identity" value={inputValue.identity} id="" onChange={handleChange}>
                                        <option value="">Select Identity</option>
                                        <option value="Woman">Woman</option>
                                        <option value="Man">Man</option>
                                    </select>
                                    {inputValueError.identity&& <p className='text-red-700 text-[9px] absolute mt-[-14px]'>{inputValueError.identity}</p>}
                                </div>
                                <div>
                                    <select className='mb-[15px] px-3 py-2 border border-black rounded-lg' name="married" value={inputValueError.married} id="" onChange={handleChange}>
                                        <option value="">Select Status</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    {inputValueError.married&& <p className='text-red-700 text-[9px] absolute mt-[-14px]'>{inputValueError.married}</p>}
                                </div>
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
                                <div>
                                    <input name='area' value={inputValue.area} className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Eg 508765' onChange={handleChange}/>
                                    {inputValueError.area&& <p className='text-red-700 text-[9px] absolute mt-[-14px]'>{inputValueError.area}</p>}
                                </div>
                                <div>
                                    <input name='address1' value={inputValue.address1} className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Flat no, House no,Building' onChange={handleChange}/>
                                    {inputValueError.address1&& <p className='text-red-700 text-[9px] absolute mt-[-14px]'>{inputValueError.address1}</p>}
                                </div>
                                <div>
                                    <input name='address2' value={inputValue.address2} className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Area, Colony, Street' onChange={handleChange}/>
                                    {inputValueError.address2&& <p className='text-red-700 text-[9px] absolute mt-[-14px]'>{inputValueError.address2}</p>}
                                </div>
                                <div>
                                    <input name='landmark' value={inputValue.landmark} className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Eg Utt theater' onChange={handleChange}/>
                                    {inputValueError.landmark&& <p className='text-red-700 text-[9px] absolute mt-[-14px]'>{inputValueError.landmark}</p>}
                                </div>
                                <div>
                                    <input name='town' value={inputValue.town} className='mb-[15px] px-3 py-2 border border-black rounded-lg' type="text" placeholder='Mumbai' onChange={handleChange}/>
                                    {inputValueError.town&& <p className='text-red-700 text-[9px] absolute mt-[-14px]'>{inputValueError.town}</p>}
                                </div>
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
        
    </div>
  )
}

export default ProfilePage