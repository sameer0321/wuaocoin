import React from 'react'
import PieChart from '../assets/images/Pie-Chart.png'
import wLogo from '../assets/images/W-Logo.png'
import thirdArrow from '../assets/images/third-arrow-img.png'
import forthArrow from '../assets/images/forth-arrow-img.png'
import elipse1 from '../assets/images/elipse-1.png'

const SecondSection = () => {
  return (
    <div className='relative overflow-hidden'>
    <img className=' top-[-40%] right-[50%] absolute z-[1]' src={thirdArrow} alt="thirdarrow" />
    <img className=' top-[-30%] right-[10%] absolute z-[1]' src={forthArrow} alt="fourtarrow" />
    <img className='absolute right-0 top-[-18%] md:top-[-50%] lg:top-[-20%] max-lg:w-[15%]' src={elipse1} alt="elipse-1" />
    <div className='max-w-[1140px] mx-auto px-3 lg:mt-[300px]'>
        <div className="flex flex-wrap -mx-3 md:flex-row flex-col-reverse relative z-[3] md:pt-0 pt-[70px]">
            <div className=" w-full md:w-6/12 px-3 flex h-full justify-center items-center" data-aos="fade-up-right">
                <div className="relative">
                    <img className='w-full' src={PieChart} alt="timeline" />
                    <img className='absolute top-[34.6%] right-[34.7%] w-[30%] animate-spin-slow' src={wLogo} alt="circle" />
                </div>
            </div>
            <div className="w-full md:w-6/12 px-3 flex justify-center flex-col" data-aos="fade-up-left">
                <h2 className='text-[25px] sm:text-[30px] md:text-[50px] font-Montserrat font-bold text-[#32352C] text-center md:text-start'>Our Project</h2>
                <p className='md:max-w-[447px] font-Montserrat text-[14px] md:text-[18px] font-normal text-black opacity-70 max-md:text-center'>Wuaocoin is the first project in the TechFi category that allows users multiple options to have utility and usability in the ecosystem, its time to change the way of seeing the purchases and sales of products and services within an multilateral electronic commerce platform using crypto technology.</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default SecondSection
