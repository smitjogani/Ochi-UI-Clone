import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen bg-[##F1F1F1] flex gap-5 items-center px-16'>
            <div className="cardContainer h-[50vh] w-1/2">
                <div className="relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-4 py-1 border-[1px] border-[#CDEA68] rounded-full text-[#CDEA68] left-5 bottom-5 text-[12px]'>©2019-2022</button>
                </div>
            </div>
            <div className="cardContainer w-1/2 h-[50vh] flex gap-5">
                <div className="relative card w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute px-4 py-1 border-[1px] border-[#f1f1f1] rounded-full text-[#f1f1f1] left-18 bottom-5 text-[12px]'>RATING 5.0 ON CLUTCH</button>
                </div>
                <div className="relative card w-1/2 h-full  rounded-xl bg-[#212121] flex items-center justify-center">
                    <img width={102} height={104} src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute px-4 py-1 border-[1px] border-[#f1f1f1] rounded-full text-[#f1f1f1] left-18 bottom-5 text-[12px]'>BOOTCAMP</button>
                </div>
            </div>
        </div>
    )
}

export default Cards