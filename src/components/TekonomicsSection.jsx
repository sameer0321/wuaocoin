import React from 'react'
import TenkonomicsImg from '../assets/images/tekonomics-img.png'
import elipse4 from '../assets/images/elipse-4.png'
import elipse5 from '../assets/images/elipse-5.png'
import seventhArrow from '../assets/images/seventh-arrow-img.png'

const TekonomicsSection = () => {
    return (
        <div className="relative">
            <img className=' absolute top-0 left-0 max-sm:w-[20%]' src={elipse4} alt="ellipis4" />
            <img className=' absolute right-0 bottom-[-20%] max-sm:w-[20%]' src={elipse5} alt="ellipis5" />
            <img className=' absolute bottom-[17%] left-[1%]' src={seventhArrow} alt="seventh-arrow" />
            <div className='mx-auto max-w-[1140px] px-3 py-[50px] sm:py-[100px] flex flex-col items-center justify-center relative z-[3]'>
                <h2 className='text-[30px] sm:text-[40px] md:text-[50px] font-Montserrat font-bold text-[#32352C] text-center pb-[22px]'>Tokenomics</h2>
                <img className='w-full' src={TenkonomicsImg} alt="tekonomics-img" data-aos="zoom-in" />
            </div>
        </div>
    )
}

export default TekonomicsSection
