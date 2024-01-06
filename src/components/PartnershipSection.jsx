import React from 'react'
import UnicrfLogo from '../assets/images/Unicef-logo.png'

const PartnershipSection = () => {
    return (
        <div className='bg-[url(./assets/images/partnership-section-img.png)] bg-complete bg-no-repeat h-full'>
            <div className=" flex items-center justify-center flex-col  pb-[60px] max-w-[1140px] mx-auto px-3">
                <h2 className='text-white text-center text-[30px] sm:text-[40px] md:text-[50px] font-Montserrat font-bold pt-[75px] pb-12' data-aos="flip-down" >Partnership</h2>
                <img className='max-w-[453px] w-[70%] md:w-full' src={UnicrfLogo} alt="unicef" data-aos="flip-up" />
            </div>
        </div>
    )
}

export default PartnershipSection
