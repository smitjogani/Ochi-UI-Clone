import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import img from "../assets/content.jpg"

const LandingPage = () => {
    return (
        <div className='w-full h-screen pt-1'>
            <div className='textstructer mt-36 px-20'>
                {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item,index) => {
                    return (
                        <div className="masker">
                            <div className='w-fit flex items-end overflow-hidden'>
                                {index === 1 && (<div className="mr-[1vw] w-[9.7vw] rounded-md h-[6vw] -top-[1.2vw] relative "><img className="object-cover mt-4 rounded-md" src={img}/></div>)}
                                <h1 className="uppercase text-[7.5vw] leading-[7.5vw] tracking-tighter font-['Founders Grotesk X-Condensed'] font-bold">{item}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='px-5 py-2 border-t-[1px] border-[#B2B2B2] mt-20 text-md flex justify-between items-center'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
                    return (
                        <p className='text-md font-light tracking-tight leading-none'>{item}</p>

                    )
                })}
                <div className='start flex items-center gap-2'>
                    <div className='px-5 py-2 border-[1px] rounded-full border-[#B2B2B2] font-light text-sm capitalize'>Start the project</div>
                    <div className='w-9 h-9 border-[1px] font-light flex items-center justify-center rounded-full text-[1.7vw] border-[#B2B2B2]'><MdOutlineArrowOutward /></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage