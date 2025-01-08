import React from "react";
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
    <div className="bg-black text-white">
      {/* Section 1: Partner with Us */}
      <div className="flex flex-col md:flex-row bg-black text-white px-6  py-4 md:py-[20px] relative gap-4 justify-between items-center w-full">
        <div className="flex gap-4 items-start">
          <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="" />
          <p className="font-semibold text-sm">
            <span className="text-white font-bold">List your shows</span> Got a
            show, event, activity, or a great experience? Partner with us and
            get listed on CINCO.
          </p>
        </div>
        <div className="p-2 text-sm lg:px-4 lg:py-2 rounded-lg bg-purple-800 text-white text-center">
          Contact today!
        </div>
      </div>

      {/* Section 2: Quick Actions */}
      <div className="px-6 md:px-[200px] flex flex-col md:flex-row justify-between bg-gray-800 py-4 gap-6">
        <div className="cursor-pointer text-center">
          <FcCustomerSupport size={50} className="mx-auto" />
          <p className="text-xs mt-2">24/7 Customer Care</p>
        </div>
        <div className="cursor-pointer text-center">
          <LuTicketsPlane size={50} className="mx-auto" />
          <p className="text-xs mt-2">Resend Booking Confirmation</p>
        </div>
        <div className="cursor-pointer text-center">
          <IoIosMailOpen size={50} className="mx-auto" />
          <p className="text-xs mt-2">Subscribe To The Newsletter</p>
        </div>
      </div>

      {/* Section 3: Movie Information */}
      <div className="bg-black text-gray-200 px-6 md:px-[170px] py-6">
        <div className="mb-8">
          <p className="mb-3 text-gray-500">Upcoming Movies</p>
          <p className="text-[10px] text-gray-500 leading-5">
            The Dark Knight | Avengers: Endgame | Mad Max: Fury Road | John Wick:
            Chapter 4 | Inception | The Grand Budapest Hotel | Superbad | Borat:
            Cultural Learnings of America for Make Benefit Glorious Nation of
            Kazakhstan | The Hangover | Dumb and Dumber | Forrest Gump | The
            Shawshank Redemption | The Godfather | Parasite | 12 Years a Slave |
            Blade Runner 2049 | Interstellar | The Matrix | Dune | Star Wars:
            Episode V - The Empire Strikes Back | Toy Story | Spider-Man: Into the
            Spider-Verse | Finding Nemo | The Lion King | Frozen | Get Out | The
            Exorcist | Hereditary | A Quiet Place | It | The Notebook | Titanic |
            Pride and Prejudice | La La Land | Crazy Rich Asians
          </p>
        </div>
        <div className="mb-8">
          <p className="mb-3 text-gray-500">Movies Now Showing</p>
          <p className="text-[10px] text-gray-500 leading-5">
            Inception | The Dark Knight | Avengers: Endgame | Forrest Gump | The
            Godfather | Toy Story | The Shawshank Redemption | Spider-Man: Into
            the Spider-Verse | Titanic | Get Out
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 items-center justify-center mt-4">
          <FaFacebook size={30} className="cursor-pointer" />
          <FaPinterestP size={30} className="cursor-pointer" />
          <FaInstagram size={30} className="cursor-pointer" />
          <BsTwitterX size={30} className="cursor-pointer" />
          <IoLogoYoutube size={30} className="cursor-pointer" />
          <FaLinkedinIn size={30} className="cursor-pointer" />
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 text-[10px] mt-4">
          © 2025 CINCO. All rights reserved. This content is protected by
          copyright laws. Unauthorized use, reproduction, or distribution is
          prohibited.
        </p>
      </div>
    </div>
  );
};

export default Footer;
