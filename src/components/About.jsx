import React from 'react'
import hm from "../assets/hm.jpg"

const About = () => {
    return (
        <div  data-scroll data-scroll-section data-scroll-speed=".8"  className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
            <h1 className='font-["Neue_Montreal"] text-[4vw] tracking-tight leading-[4.8vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds,  sell proudcts, epxlain complex ideas, and hire great people
            </h1>
            <div className="flex gap-5 w-full pt-10 border-[#99AD53] border-t-[1px] mt-20">
                <div className="w-1/2">
                    <h1 className='text-6xl'>Oue approch :</h1>
                    <button className='px-6 py-4 flex gap-8 items-center mt-10 bg-zinc-900 rounded-full text-[#fff] uppercase'>Read More <div className='rounded-full bg-[#fff] w-2.5 h-2.5'></div></button>
                </div>
                <div className="w-1/2 h-[70vh]"><img className='w-full h-full rounded-3xl object-cover' src={hm}/></div>
            </div>
        </div>
    )
}

export default About