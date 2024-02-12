import { motion, useAnimation } from 'framer-motion'
import React from 'react'

export const Featured = () => {

    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    }

    return (
        <div className='w-full py-16 '>
            <div className="px-16 w-full border-b-[1px] pb-12 border-[#D2D2D2]">
                <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
            </div>
            <div className='px-20'>
                <div className="cards flex gap-10 mt-10">
                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className='absolute flex overflow-hidden z-[9] left-full -translate-x-1/2 top-1/3 -translate-y-1/2 text-[#CDEA68] text-8xl leading-none tracking-tighter'>
                            {"FYDE".split('').map((item, index) => {
                                return (
                                    <motion.span initial={{ y: "100%" }} animate={cards[0]} className='inline-block' transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}>{item}</motion.span>
                                )
                            })}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" className='w-full rounded-xl h-full bg-cover' alt="" />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className='absolute z-[9] flex overflow-hidden right-full translate-x-1/2 top-1/3 -translate-y-1/2 text-[#CDEA68] text-8xl leading-none tracking-tighter'>
                            {"VISE".split('').map((item, index) => {
                                return (
                                    <motion.span initial={{ y: "100%" }} animate={cards[1]} className='inline-block' transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}>{item}</motion.span>
                                )
                            })}
                        </h1>
                        <div className="card w-full h-full overflow-hidden">
                            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" className='w-full rounded-xl h-full bg-cover' />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
