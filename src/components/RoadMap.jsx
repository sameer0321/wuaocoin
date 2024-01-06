import React from 'react'
import RoadMapImg from '../assets/images/roadmap-img.png'
import sixthArrow from '../assets/images/sixth-arrow-img.png'
import elipse2 from '../assets/images/elipse-2.png'
import elipse3 from '../assets/images/elipse-3.png'
import RoadMapCards from "./RoadMapCards";

const Cards = [
    {
        id: 1,
        bgColor: " bg-[#EFB93B]",
        SerialNumber: '01',
        paragraph: 'Organizational concept (creations)'
    },
    {
        id: 2,
        bgColor: " bg-[#E0480A]",
        SerialNumber: '02',
        paragraph: 'Directional Process (Actions)'
    },
    {
        id: 3,
        bgColor: " bg-[#4D86DC]",
        SerialNumber: '03',
        paragraph: 'Operational Development (technical team)'
    },
    {
        id: 4,
        bgColor: " bg-[#364EC6]",
        SerialNumber: '04',
        paragraph: 'Strategic Opportunities (alliances)'
    },
    {
        id: 5,
        bgColor: " bg-[#6A3DAD]",
        SerialNumber: '05',
        paragraph: 'Stakeholders (benefits)'
    },
    {
        id: 6,
        bgColor: " bg-[#ED5C83]",
        SerialNumber: '06',
        paragraph: 'Human Identity (social contribution)'
    },
]
const RoadMap = () => {
    return (
        <div className='relative'>
            <img className=' absolute left-0 top-0 max-sm:w-[20%]' src={elipse2} alt="ellipis2" />
            <img className=' absolute bottom-[-25%] right-0' src={elipse3} alt="ellipis3" />
            <div className="max-w-[1360px] px-3 mx-auto flex items-center flex-col pt-[30px] md:pt-[100px] relative">
                <img className=' absolute right-0 top-[15%]' src={sixthArrow} alt="sixth-arrow" />
                <h2 className=' relative z-[3] text-[30px] sm:text-[40px] md:text-[50px] font-Montserrat font-bold text-[#32352C] text-center pb-[18px]'>RoadMap</h2>
                <p className='text-black relative z-[3]  text-[14px] md:text-[18px] font-Montserrat font-normal opacity-70 max-w-[672px] text-center pb-[70px]'>Knowing our values, understanding the business idea and then, gradually, presenting the plans to the public is our way of doing things.</p>
                <img className=' relative z-[3]' src={RoadMapImg} alt="roadmap" data-aos="flip-down" />
                <div className="row pt-[55px] pb-[70px] md:pb-[120px] relative z-[3] justify-center items-center">
                    {Cards.map((e) => <RoadMapCards key={e.id} bg={e.bgColor} count={e.SerialNumber} para={e.paragraph} />)}
                </div>
            </div>
        </div>
    )
}

export default RoadMap
