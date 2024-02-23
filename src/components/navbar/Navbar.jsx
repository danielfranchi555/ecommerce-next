'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import iconMenu from '../../../public/icon-menu-nav.svg'
import Navmobile from './Navmobile'
import NavbarDesktop from './NavbarDesktop'
import InputSearch from './InputSearch'
import Link from 'next/link'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
        console.log(open);
    }

    return (
        <div className='mb-10 md:mb-0'>
            <div className='bg-white py-5 flex justify-between items-center px-5 '>
                <Link href={'/'}><span className='text-blue-400 text-2xl'>MegaMart</span></Link>
                <InputSearch />
                <NavbarDesktop className='hidden md:block' />
                <Image className='md:hidden' onClick={() => toggle()} src={iconMenu} width={40} height={100} />
            </div>
            {open ? <Navmobile className=' md:hidden' /> : ''}
        </div>

    )
}

export default Navbar
