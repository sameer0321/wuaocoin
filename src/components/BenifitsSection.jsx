import React from 'react'
import BenifitsImg1 from '../assets/images/benifits-img-1.png'
import BenifitsImg2 from '../assets/images/benifits-img-2.png'
import BenifitsImg3 from '../assets/images/benifits-img-3.png'


const BenifitsSection = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className="max-w-[1140px] px-3 mx-auto lg:pt-[40px]">
                <h2 className='text-[30px] sm:text-[40px] md:text-[50px] font-Montserrat font-bold text-[#32352C] text-center pb-[60px]'>Benefits</h2>
                <div className="row pb-[50px] md:pb-[100px] items-center justify-center">
                    <div className="w-8/12 sm:pt-[20px] sm:w-6/12 md:w-4/12 px-3" data-aos="flip-left">
                        <div className=" animate-wiggle-slow overflow-hidden bg-[#FBF3E5] p-10">
                            <img className='w-full' src={BenifitsImg1} alt="benifits-img" />
                        </div>
                        <p className='text-black font-Montserrat font-normal text-[14px] md:text-[18px] text-center leading-[31px] opacity-70 pt-[17px]'>Services, Products and Community
                            All in one place!
                        </p>
                    </div>
                    <div className="w-8/12 sm:pt-[20px] sm:w-6/12 md:w-4/12 px-3" data-aos="flip-up">
                        <div className=" animate-wiggle-slow overflow-hidden bg-[#FBF3E5]">
                            <img src={BenifitsImg2} alt="benifits-img" />
                        </div>
                        <p className='text-black font-Montserrat font-normal text-[14px] md:text-[18px] text-center leading-[31px] opacity-70 pt-[17px]'>Selling in crypto will no longer be complicated, it will be safe and reliable.</p>
                    </div>
                    <div className="w-8/12 sm:pt-[20px] sm:w-6/12 md:w-4/12 px-3" data-aos="flip-right">
                        <div className=" animate-wiggle-slow overflow-hidden bg-[#FBF3E5]">
                            <img src={BenifitsImg3} alt="ibenifits-img" />
                        </div>
                        <p className='text-black font-Montserrat font-normal text-[14px] md:text-[18px] text-center leading-[31px] opacity-70 pt-[17px]'>Buying and getting a real discount is possible? Join and check it out.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenifitsSection
