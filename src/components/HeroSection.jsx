import React from 'react'
import heroImg from '../assets/images/hero-img.png'
import firstArrow from '../assets/images/first-arrow-img.png'
import secondArrow from '../assets/images/second-arrow-img.png'

const HeroSection = () => {
    return (
        // <div>
        //     <div className='max-w-[1140px] mx-auto px-3 lg:h-[85vh] min-[1281px]:h-[65vh]'>
        //         <div className="row justify-end items-end h-full">
        //             <div className=" lg:w-6/12 w-full px-3 pt-[50px] lg:pt-0">
        //                 <p className=' font-Montserrat font-semibold text-[16px] md:text-[20px] text-white z-[3] relative'>Welcome to</p>
        //                 <h1 className='font-black font-Montserrat text-[30px] sm:text-[45px] md:text-[65px] leading-[40px] sm:leading-[60px] lg:leading-[73px] text-white max-w-[513px] z-[3] relative'>The Future of E-Commerce</h1>
        //                 <p className='text-white font-Montserrat font-medium max-w-[384px] text-[14px] md:text-[18px] z-[3] relative'>A multi-purpose token to improve digital sales and purchases</p>
        //                 <div className="flex gap-[15px] mt-[40px]">
        //                     <div className="bg-white rounded-[40px] border border-white hover:bg-transparent duration-500">
        //                         <button className='bg-text-gradient text-orange
        //                              bg-clip-text  text-center text-[12px] md:text-[16px] duration-500  hover:text-white  font-Montserrat font-semibold py-[8px] px-[15px] relative z-[2] sm:py-[11px] md:px-[21px] '>How To Buy</button>
        //                     </div>
        //                     <div className="hover:bg-white rounded-[40px] duration-500">
        //                         <button className='hover:bg-text-gradient text-white duration-500 hover:text-transparent hover:bg-clip-text  text-center text-[12px] md:text-[16px] font-Montserrat font-semibold py-[8px] px-[15px] relative z-[2] sm:py-[11px] md:px-[21px] bg-transparent border border-white rounded-[40px]'>Read Whitepaper</button>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="lg:w-6/12 lg:pb-0 pb-[100px] w-full px-3 flex lg:items-end lg:justify-end h-full lg:pl-[100px] relative z-[3] bg-img">
        //                 <img className='w-full pt-[30px] lg:pt-0' src={heroImg} alt="hero-img" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <header className='relative overflow-hidden'>
                <img className='absolute right-[55%] top-[15%] z-[1]' src={firstArrow} alt="first" />
                <img className=' absolute bottom-[-9%] left-[7%] z-[1]' src={secondArrow} alt="second" />
                <div className="max-w-[1140px] mx-auto px-3 lg:h-[85vh] min-[1281px]:h-[75vh] ">
                    <div className="row justify-end items-end h-full">
                        <div className=" lg:w-6/12 w-full px-3 pt-[50px] lg:pt-0" data-aos="fade-right">
                            <p className=' font-Montserrat font-semibold text-[16px] md:text-[20px] text-white z-[3] relative'>Welcome to</p>
                            <h1 className='font-black font-Montserrat text-[30px] sm:text-[45px] md:text-[65px] leading-[40px] sm:leading-[60px] lg:leading-[73px] text-white max-w-[232px]  sm:max-w-[513px] z-[3] relative'>The Future of E-Commerce</h1>
                            <p className='text-white font-Montserrat font-medium max-w-[384px] text-[14px] md:text-[18px] z-[3] relative'>A multi-purpose token to improve digital sales and purchases</p>
                            <div className="flex gap-[15px] mt-[40px]">
                                <div className="bg-white rounded-[40px] border border-white hover:bg-transparent duration-500">
                                    <button className=' bg-text-gradient text-transparent bg-clip-text text-center text-[12px] md:text-[16px] duration-500  hover:text-white  font-Montserrat font-semibold py-[8px] px-[15px] relative z-[2] sm:py-[11px] md:px-[21px] '>How To Buy</button>
                                </div>
                                <div className="hover:bg-white rounded-[40px] duration-500">
                                    <button className='hover:bg-text-gradient text-white duration-500 hover:text-transparent hover:bg-clip-text  text-center text-[12px] md:text-[16px] font-Montserrat font-semibold py-[8px] px-[15px] relative z-[2] sm:py-[11px] md:px-[21px] bg-transparent border border-white rounded-[40px]'>Read Whitepaper</button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-6/12 lg:pb-0 pb-[20px] w-full px-3 flex lg:items-end lg:justify-end h-full lg:pl-[100px] relative z-[3]" data-aos="fade-left">
                            <img className='w-full pt-[30px] lg:pt-0' src={heroImg} alt="sec1-img" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HeroSection
