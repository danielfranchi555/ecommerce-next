import React from 'react'
import heroImage from '../../../public/images/hero-2.png'
import heroImageMobile from '../../../public/images/hero-mobile.png'

import Image from 'next/image'
const Hero = () => {
    return (
        <div className=' border-red-500 mx-auto w-[95%] rounded-lg relative'>
            <div className='absolute text-white top-[30%] left-[10%] border-red flex flex-col gap-1'>
                <p className='text-[10px] md:text-1xl lg:text-2xl'>Best dead online on smart watches</p>
                <h1 className='text-1xl md:text-5xl lg:text-7xl'>Smart Inteligente</h1>
                <h2 className='text-[12px] md:text-1xl lg:text-2xl'>Up to 80% OFF</h2>
            </div>
            <Image src={heroImage} width='auto' alt='image-hero' height='auto' className='hidden md:block md:w-[100%] object-cover rounded-xl   ' />
            <Image src={heroImageMobile} alt='image-hero' width='auto' height='auto' className='w-[100%] object-cover rounded-xl h-[150px] md:hidden  ' />
        </div>
    )
}

export default Hero
