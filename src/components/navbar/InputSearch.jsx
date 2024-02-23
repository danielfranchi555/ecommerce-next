import Image from 'next/image'
import React from 'react'
import iconSearch from '../../../public/icon-search.svg'
const InputSearch = () => {
    return (
        <div className='hidden md:flex bg-[#F3F9FB] gap-2 py-3 px-5 rounded-lg  w-[500px]'>
            <Image src={iconSearch} width={20} height={10} />
            <input type="text"  className='bg-[#F3F9FB] w-[100%] px-0 text-black' placeholder='Search products' />
        </div>
    )
}

export default InputSearch
