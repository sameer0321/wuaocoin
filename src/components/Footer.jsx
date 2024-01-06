import React from 'react'
import footerLogo from "../assets/images/footer-logo.png";
import twitterIcon from "../assets/images/twitter-icon.svg";
import discordIcon from "../assets/images/discord-icon.svg";
import linkdInIcon from "../assets/images/linkedIn-icon.png";
import telegramIcon from "../assets/images/telegram-icon.png";
import ellipis6 from "../assets/images/elipse-6.png";
import ellipis7 from "../assets/images/elipse-7.png";
const Footer = () => {
    const y = new Date()
    const myyear = y.getFullYear();
    return (
        <div className='relative'>
            <img className='absolute top-[-10%] sm:top-[-35%] left-0 max-sm:w-[40%]' src={ellipis6} alt="elipse6" />
            <img className='absolute bottom-0 right-0 max-sm:w-[40%]' src={ellipis7} alt="ellipis7" />
            <div className='pt-[50px] sm:pt-[105px]'>
                <div className="container max-w-[1140px] mx-auto px-3">
                    <div className="flex flex-row flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 relative z-[3]">
                            <img src={footerLogo} alt="logo" />
                            <p className='font-montserrat text-base opacity-70 text-[#32352C] leading-[27.84px] max-w-[252.35px] mt-[22px] '>Welcome to The Future of the Market. The world's first Global TechFi Platform</p>
                            <div className='flex items-center gap-3 pt-6'>
                                <a href="https://discord.com/"><img src={discordIcon} alt="discord" /></a>
                                <a href="https://twitter.com/i/flow/login"><img src={twitterIcon} alt="twitr" /></a>
                                <a href="https://web.telegram.org/k/"><img src={telegramIcon} alt="telegram" /></a>
                                <a href="https://www.linkedin.com/"><img src={linkdInIcon} alt="linkdin" /></a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 flex flex-col md:pt-0 pt-[40px] ">
                            <div className="flex flex-row flex-wrap -mx-3 pb-[70px]">
                                <div className="sm:w-1/3 px-3 flex md:justify-end">
                                    <ul>
                                        <li className='font-montserrat text-lg font-semibold leading-[27px] mb-[14px]'>Documents</li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>WhitePaper</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>Customers</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>Business</a></li>
                                    </ul>
                                </div>
                                <div className="sm:w-1/3 px-3 flex md:justify-end pb-[40px]">
                                    <ul>
                                        <li className='font-montserrat text-lg font-semibold leading-[27px] mb-[14px]'>Quick Links</li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>Home</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>About Us</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>Benefits</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>ICO</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>RoadMap</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>Tokenomics</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>Partnership</a></li>
                                    </ul>
                                </div>
                                <div className="sm:w-1/3 px-3 flex md:justify-end">
                                    <ul>
                                        <li className='font-montserrat text-lg font-semibold leading-[27px] mb-[14px]'>Company</li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>WUAOCOIN</a></li>
                                        <li><a href="#" className='after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:bg-orange-400 after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full font-montserrat text-base text-[#32352C] leading-[34.4px] opacity-80 '>WUAOSHOP</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-t-solid border-t-[#9F9F9F]"></div>
                <div className='container max-w-[1140px] mx-auto px-3 py-[25px]'>
                    <p className='text-center font-montserrat text-base leading-[24px] text-[#32352C] opacity-60 '>Â© Copyright {myyear} - Wuaocoin</p>
                </div>
            </div>
        </div>
    )
}

export default Footer 