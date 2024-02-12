import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle-180);
        })
    })

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.8" className="relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center">
                <div className='flex absolute gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white'>
                        <div className='relative items-center justify-center w-2/3 h-2/3 rounded-full bg-black'>
                            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className="line top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute w-full h-10">
                                <div className='w-7 h-7 rounded-full bg-white'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white'>
                        <div className='relative items-center justify-center w-2/3 h-2/3 rounded-full bg-black'>
                            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className="line top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute w-full h-10">
                                <div className='w-7 h-7 rounded-full bg-white'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes