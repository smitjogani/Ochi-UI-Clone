import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 -mb-[56vh] bg-[#004D43] rounded-3xl text-white ">
            <div className='text border-t-2 border-b-2 border-[#4D837C] flex whitespace-nowrap pb-6 overflow-hidden'>
                <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", duration:10, repeat: Infinity}} className="text-[20vw] leading-none  font-['Founders Grotesk X-Condensed'] uppercase font-bold mr-20">WE ARE OCHI</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", duration:10, repeat: Infinity}} className="text-[20vw] leading-none  font-['Founders Grotesk X-Condensed'] uppercase font-bold">WE ARE OCHI</motion.h1>

            </div>
        </div>
    )
}

export default Marquee