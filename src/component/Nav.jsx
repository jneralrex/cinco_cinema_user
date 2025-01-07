import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";
import { FaUserLarge } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbCurrentLocation } from "react-icons/tb";
import { VscBell } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { AiOutlineLock } from "react-icons/ai";
import { LuTvMinimalPlay } from "react-icons/lu";
import { BsCreditCard2Front } from "react-icons/bs";
import { RxDoubleArrowRight } from "react-icons/rx";
import { AiOutlineSetting } from "react-icons/ai";
import { GoGift } from "react-icons/go";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Footer from "./Footer";

const Nav = () => {
  const [location, setLocation] = useState("Pick your location");
  const handleClick = (value) => {
    setLocation(value);
  };
  // login/register
  const [isLoginRegister, setIsLoginRegister] = useState(false);
  const loginRegister = () => {
    setIsLoginRegister(!isLoginRegister);
  };
  return (
    <div>
      <nav className=" fixed top-0 left-0 right-0 z-50 bg-white shadow shadow-purple-800 flex items-center justify-between md:px-[40px] px-5 py-2">
        <div className="flex items-center gap-5">
          <Link to={"/"}>
            <img
              className="md:size-[60px] size-[40px]"
              src="/images/cinco-logo.png"
              alt="logo"
            />
          </Link>
          <div className="hidden border md:flex items-center gap-2 px-2">
            <IoSearchOutline className="text-gray-500" />
            <input
              className="xl:w-[600px] lg:w-[400px] w-[300px] text-sm outline-none py-2"
              type="text"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          {/* location */}
          <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="flex items-center lg:gap-2 gap-1"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              <p className="lg:text-[15px] text-[13px] font-semibold">
                {location}
              </p>
              <GoChevronDown />
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl rounded-none">
                <div>
                  <div className=" border flex items-center gap-5 px-2">
                    <IoSearchOutline className="text-gray-500" />
                    <input
                      className="w-full text-xs outline-none py-2"
                      type="text"
                      placeholder="Search for your city"
                    />
                  </div>
                  <div className="cursor-pointer flex items-center gap-3 border-b lg:py-4 py-3">
                    <TbCurrentLocation className="text-red-500 lg:text-[16px]" />
                    <p className="text-red-500 lg:text-sm text-xs">
                      Detect my location
                    </p>
                  </div>
                  <div className="lg:mb-10">
                    <p className="text-center text-sm lg:py-6 py-3">
                      Popular Cities
                    </p>
                    <form
                      method="dialog"
                      className="grid lg:grid-cols-10 grid-cols-5 lg:gap-5 gap-3"
                    >
                      <button
                        onClick={() => handleClick("Lagos")}
                        className="flex flex-col items-center cursor-pointer"
                      >
                        <img
                          src="/images/lagos.png"
                          className="md:h-16"
                          alt=""
                        />
                        <p className="lg:text-sm text-xs">Lagos</p>
                      </button>
                      <button
                        onClick={() => handleClick("Abuja")}
                        className="flex flex-col items-center cursor-pointer"
                      >
                        <img
                          src="/images/abuja.png"
                          className="md:h-16 h-10"
                          alt=""
                        />
                        <p className="lg:text-sm text-xs">Abuja</p>
                      </button>
                      <button
                        onClick={() => handleClick("Ogun")}
                        className="flex flex-col items-center cursor-pointer"
                      >
                        <img
                          src="/images/ogun.png"
                          className="md:h-16 h-10"
                          alt=""
                        />
                        <p className="lg:text-sm text-xs">Ogun</p>
                      </button>
                      <button
                        onClick={() => handleClick("Port Harcourt")}
                        className="flex flex-col items-center cursor-pointer"
                      >
                        <img
                          src="/images/port.png"
                          className="md:h-16 h-10"
                          alt=""
                        />
                        <p className="lg:text-sm text-xs">Port&nbsp;Harcourt</p>
                      </button>
                      <button
                        onClick={() => handleClick("Kano")}
                        className="flex flex-col items-center cursor-pointer"
                      >
                        <img
                          src="/images/kano.png"
                          className="md:h-16 h-10"
                          alt=""
                        />
                        <p className="lg:text-sm text-xs">Kano</p>
                      </button>
                      <button
                        onClick={() => handleClick("Benin")}
                        className="flex flex-col items-center cursor-pointer"
                      >
                        <img
                          src="/images/benin.png"
                          className="md:h-[66px] h-10"
                          alt=""
                        />
                        <p className="lg:text-sm text-xs">Benin</p>
                      </button>
                      <button
                        onClick={() => handleClick("Akwa Ibom")}
                        className="flex flex-col items-center cursor-pointer"
                      >
                        <img
                          src="/images/akwa.png"
                          className="md:h-16 h-10"
                          alt=""
                        />
                        <p className="lg:text-sm text-xs">Akwa&nbsp;Ibom</p>
                      </button>
                      <button
                        onClick={() => handleClick("Brono")}
                        className="flex flex-col items-center cursor-pointer"
                      >
                        <img
                          src="/images/brono.png"
                          className="md:h-16 h-10"
                          alt=""
                        />
                        <p className="lg:text-sm text-xs">Borno</p>
                      </button>
                      <button
                        onClick={() => handleClick("Oyo")}
                        className="flex flex-col items-center cursor-pointer"
                      >
                        <img
                          src="/images/oyo.png"
                          className="md:h-16 h-10"
                          alt=""
                        />
                        <p className="lg:text-sm text-xs">Oyo</p>
                      </button>
                      <button
                        onClick={() => handleClick("Ondo")}
                        className="flex flex-col items-center"
                      >
                        <img
                          src="/images/ondo.png"
                          className="md:h-16 h-10"
                          alt=""
                        />
                        <p className="lg:text-sm text-xs">Ondo</p>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
          <div className="hidden">
            <div className="size-8 rounded-full border-2 flex items-end justify-center">
              <FaUserLarge className="size-[75%] text-gray-400 rounded-full" />
            </div>
            <div>
              <p>Hi, Guest</p>
            </div>
          </div>
          {/* sign up/in */}
          <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="bg-purple-800 px-4 py-[5px] rounded text-xs text-white"
            >
              Sign in
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle text-lg btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-xl text-center">Sign in</h3>
                <div className={isLoginRegister ? "hidden" : "block"}>
                  {/* <div className="mb-10 relative">{errorLogin && <span className="text-red-500 text-sm absolute">{errorLogin}</span>}</div> */}
                  <form>
                    <div className="mb-3">
                      <label className="block mb-1 text-[15px]">EMAIL</label>
                      <input
                        type="email"
                        className="border rounded-[3px] w-full text-[16.5px] outline-none border-black/60 py-2 px-3"
                        placeholder="you@awesome.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block mb-1 text-[15px]">PASSWORD</label>
                      <input
                        type="password"
                        className="border rounded-[3px] w-full text-[16.5px] outline-none border-black/60 py-2 px-4"
                        placeholder="supersecret"
                      />
                    </div>
                    <button className="bg-black text-white w-full py-2 rounded">
                      Sign in
                    </button>
                  </form>
                  <div className="flex items-center justify-between">
                    <p className="text-center text-sm mt-4 underline hover:no-underline">
                      Forgot password?
                    </p>
                    <p className="text-center text-sm mt-4">
                      Don't have an account?{" "}
                      <span
                        className="underline hover:no-underline cursor-pointer"
                        onClick={loginRegister}
                      >
                        Join
                      </span>
                    </p>
                  </div>
                </div>
                <div className={isLoginRegister ? "block" : "hidden"}>
                  {/* {error && <span className="text-red-500 text-sm">{error}</span>} */}
                  {/* {adminRegError && <span className="text-red-500 text-sm">{adminRegError}</span>} */}
                  <form>
                    <div className="mb-5">
                      <label className="block mb-1 text-[15px]">NAME</label>
                      <input
                        type="text"
                        className="border rounded-[3px] w-full text-[16.5px] outline-none border-black/60 py-2 px-3"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div className="mb-5">
                      <label className="block mb-1 text-[15px]">EMAIL</label>
                      <input
                        type="email"
                        className="border rounded-[3px] w-full text-[16.5px] outline-none border-black/60 py-2 px-3"
                        placeholder="you@awesome.com"
                      />
                    </div>
                    <div className="mb-5">
                      <label className="block mb-1 text-[15px]">PHONE</label>
                      <input
                        type="email"
                        className="border rounded-[3px] w-full text-[16.5px] outline-none border-black/60 py-2 px-3"
                        placeholder="123456..."
                      />
                    </div>
                    <div className="mb-5">
                      <label className="block mb-1 text-[15px]">PASSWORD</label>
                      <input
                        type="password"
                        className="border rounded-[3px] w-full text-[16.5px] outline-none border-black/60 py-2 px-4"
                        placeholder="supersecret"
                      />
                    </div>
                    <button className="bg-black text-white w-full py-2 rounded">
                      Sign up
                    </button>
                  </form>
                  <p className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <span
                      className="underline hover:no-underline cursor-pointer"
                      onClick={loginRegister}
                    >
                      Sign in
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-5 my-4">
                  <div className="h-[0.5px] bg-black/30 w-full"></div>
                  <p className="font-semibold">or</p>
                  <div className="h-[0.5px] bg-black/30 w-full"></div>
                </div>
                <div className="w-full py-2 rounded-[3px] cursor-pointer mb-2 border flex items-center justify-center gap-2 bg-white hover:border-blue-500">
                  <AiFillFacebook className="text-blue-500 text-2xl" />
                  <p>Sign in with Facebook</p>
                </div>
                <div className="w-full py-2 rounded-[3px] cursor-pointer mb-2 border flex items-center justify-center gap-2 bg-white hover:border-blue-500">
                  <FcGoogle className="text-2xl" />
                  <p>Sign in with Google</p>
                </div>
                <div className="w-full py-2 rounded-[3px] cursor-pointer mb-2 border flex items-center justify-center gap-2 bg-white hover:border-blue-500">
                  <FaApple className="text-2xl" />
                  <p>Sign in with Apple</p>
                </div>
                <p className="text-black/50 text-[13px] mt-10 text-center">
                  By continuing, you agree to our Privacy Policy and Terms of
                  Use
                </p>
              </div>
            </dialog>
          </div>
          {/* burger menu */}
          <div>
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="cursor-pointer">
                  <RxHamburgerMenu className="text-2xl" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className="pr-5 bg-white min-h-full md:w-[370px] w-[300px]">
                  {/* Sidebar content here */}
                  <div className="border-b-2 md:px-4 px-2 md:py-[22px] py-3">
                    <p className="font-bold md:text-2xl text-lg">Hey!</p>
                  </div>
                  <div className="shadow-md border-b md:px-4 px-2 py-3 flex items-center md:gap-3 gap-2 z-20">
                    <div>
                      <img
                        src="/images/rewards_login.avif"
                        className="md:w-16"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="md:text-sm text-xs text-gray-500">
                        Unlock special offers & great benefits
                      </p>
                    </div>
                    <button className="text-xs hover:text-purple-800 border text-red-500 md:px-4 p-2 rounded-lg md:py-2.5 hover:border-purple-800 border-red-500 transition-colors duration-500 font-semibold">
                      Login/Register
                    </button>
                  </div>
                  <div className=" z-10 border-b md:pl-4 pl-3 md:py-5 py-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center md:gap-4 gap-3">
                      <VscBell className="md:text-lg" />
                      <p className="text-sm">Notifications</p>
                    </div>
                    <RxDoubleArrowRight className="" />
                  </div>
                  <div className="text-gray-400 border-b md:pl-4 pl-3 py-2 md:py-4 flex justify-between items-center cursor-not-allowed">
                    <div className="flex items-center md:gap-4 gap-3">
                      <TfiShoppingCartFull className="md:text-lg" />
                      <div>
                        <p className="text-sm">Your Orders</p>
                        <p className="text-xs font-light">
                          View all your bookings and purchase
                        </p>
                      </div>
                    </div>
                    <AiOutlineLock className="md:text-lg" />
                  </div>
                  <div className="text-gray-400 border-b md:pl-4 pl-3 md:py-4 py-2 flex justify-between items-center cursor-not-allowed">
                    <div className="flex items-center md:gap-4 gap-3">
                      <LuTvMinimalPlay className="md:text-lg" />
                      <div>
                        <p className="text-sm">Stream Library</p>
                        <p className="text-xs font-light">
                          Rented and Purchased Movies
                        </p>
                      </div>
                    </div>
                    <AiOutlineLock className="md:text-lg" />
                  </div>
                  <div className=" z-10 border-b md:pl-4 pl-3 md:py-4 py-2 flex md:justify-between gap-5 items-center hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center md:gap-4 gap-3">
                      <BsCreditCard2Front className="md:text-lg" />
                      <div>
                        <p className="text-sm">Play Credit Card</p>
                        <p className="text-xs font-light line-clamp-1">
                          View your Play Credit Card details and offers
                        </p>
                      </div>
                    </div>
                    <RxDoubleArrowRight className="" />
                  </div>
                  <div className=" z-10 border-b md:pl-4 pl-3 md:py-4 py-2 flex gap-5 justify-between items-center hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center md:gap-4 gap-3">
                      <BiSupport className="md:text-lg" />
                      <div>
                        <p className="text-sm">Help and Support</p>
                        <p className="text-xs font-light line-clamp-1">
                          View commonly asked queries and Chat
                        </p>
                      </div>
                    </div>
                    <RxDoubleArrowRight className="" />
                  </div>
                  <div className="text-gray-400 border-b md:pl-4 pl-3 md:py-4 py-2 flex justify-between items-center cursor-not-allowed">
                    <div className="flex items-center md:gap-4 gap-3">
                      <AiOutlineSetting className="md:text-lg" />
                      <div>
                        <p className="text-sm">Account and Settings</p>
                        <p className="text-xs font-light line-clamp-1">
                          Location, Permission, Payment, and More
                        </p>
                      </div>
                    </div>
                    <AiOutlineLock className="md:text-lg" />
                  </div>
                  <div className=" z-10 border-b md:pl-4 pl-3 md:py-4 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center md:gap-4 gap-3">
                      <GoGift className="md:text-lg" />
                      <div>
                        <p className="text-sm">Rewards</p>
                        <p className="text-xs font-light">
                          View your rewards and unlock new ones
                        </p>
                      </div>
                    </div>
                    <RxDoubleArrowRight className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="mt-[75px] hidden bg-gray-100 text-black  md:px-10 py-3 lg:flex justify-between items-center">
        <div className="flex items-center gap-5">
          <p className="text-sm cursor-pointer">Movies</p>
          <p className="text-sm cursor-pointer">Stream</p>
          <p className="text-sm cursor-pointer">Events</p>
          <p className="text-sm cursor-pointer">Plays</p>
          <p className="text-sm cursor-pointer">Sports</p>
          <p className="text-sm cursor-pointer">Activities</p>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-xs cursor-pointer">ListYourShow</p>
          <p className="text-xs cursor-pointer">Corporate</p>
          <p className="text-xs cursor-pointer">Offers</p>
          <p className="text-xs cursor-pointer">GiftCards</p>
        </div>
      </div>
      <div className="w-full min-h-screen mt-[59.1px] md:mt-[79.4px] lg:mt-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Nav;
