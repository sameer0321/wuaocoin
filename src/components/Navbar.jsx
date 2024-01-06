import React from 'react'
import Logo from '../assets/images/logo.png'
import discord from '../assets/images/discord.svg'
import twitter from '../assets/images/twitter.svg'
import telegram from '../assets/images/telegram.svg'
import linkedIn from '../assets/images/linked-in.svg'
import earthLogo from '../assets/images/earth-logo.png'
import { useState } from "react";

const Navbar = () => {
    const [nav, setnav] = useState(false);
    function over() {
        setnav(!nav)
    }
    return (
        <div>
            <nav className='max-w-[1140px] mx-auto px-3 overflow-hidden'>
                <div className='flex justify-between items-center pt-6' data-aos="fade-down">
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                    <label className='flex flex-col gap-[9px] absolute right-2 md:hidden z-[7]' onClick={over}>
                        <span className='w-[40px] h-[5px] bg-white rounded-md'></span>
                        <span className='w-[40px] h-[5px] bg-white rounded-md'></span>
                        <span className='w-[40px] h-[5px] bg-white rounded-md'></span>
                    </label>
                    <ul className={`${nav ? "right-0" : "-right-full"} flex items-center gap-8 max-md:flex-col max-md:h-full max-md:justify-center max-md:items-center max-md:bg-[#FFB33B] max-md:fixed  max-md:top-0 max-md:w-full m-0 p-0 z-[5] duration-500`}>
                        <li>
                            <a className='text-white text-[16px] font-Montserrat leading-[normal] font-semibold ' href="#">ICO</a>
                        </li>
                        <li>
                            <a className='text-white text-[16px] font-Montserrat leading-[normal] font-semibold ' href="#">WHITEPAPER</a>
                        </li>
                        <li className='flex items-center gap-3'>
                            <a href="#">
                                <img src={discord} alt="discord" />
                            </a>
                            <a href="#">
                                <img src={twitter} alt="twitter" />
                            </a>
                            <a href="#">
                                <img src={telegram} alt="telegram" />
                            </a>
                            <a href="#">
                                <img src={linkedIn} alt="linked-in" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="border-[1px] border-white rounded-[167px] flex items-center gap-2 py-1 ps-[5px] pe-[7.5px] text-white  ">
                                <img src={earthLogo} alt="earth-logo" />{" "}
                                <select name="langauge" id="language" className="border-0 outline-none bg-[#FFB33B]">
                                    <option value="English">Eng</option>
                                    <option value="Hindi" >हिन्दी</option>
                                    <option value="Chines" >தமிழ்</option>
                                </select>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
