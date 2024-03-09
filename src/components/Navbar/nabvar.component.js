import React from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Start Here</h3>
                    <span className="text-gray-400 text-xs flex items-center">
                        Bhubaneshwar<FaChevronRight />
                    </span>
                </div>
                <div className="w-8 h-8">
                    <FaSearch className="w-full h-full " />
                </div>
            </div>
        </>
    )
};
const NavMd = () => {
    return (

        <div className="w-full flex item-center bg-white gap-3 px-3 py-2 rounded-md">
            <FaSearch />
            <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
        </div>
    )
};
const NavLg = () => {
    return (

        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2 gap-2">
                    <div className="w-12 h-12">
                        <img src="https://p7.hiclipart.com/preview/919/445/291/bookmyshow-office-android-ticket-android.jpg" alt="logo" className="w-full h-full" />
                    </div>
                    <div className="w-full flex item-center bg-white gap-3 px-3 py-2 rounded-md">
                        <FaSearch />
                        <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer ">
                        Bhubaneshwar<FaChevronDown />
                    </span>
                    <button className="bg-red-600 text-white text-sm rounded px-2 py-1">Signin</button>
                    <div className="w-8 h-8 text-white cursor-pointer">
                        <IoMdMenu className="w-full h-full" />
                    </div>
                </div>

            </div>
        </>

    )

};

const Navbar = () => {
    return (
        <>
            <nav className="bg-navCol-700 px-4 py-2">
                <div className="md:hidden ">{
                    <NavSm />
                }
                </div>
                <div className="hidden lg:hidden md:flex">{
                    <NavMd />
                }
                </div>
                <div className="hidden lg:flex">{
                    <NavLg />
                }
                </div>
            </nav >
        </>
    )
};

export default Navbar;