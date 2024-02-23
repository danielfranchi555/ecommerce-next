import React from 'react'
import iconLogin from '../../../public/login-icon.svg'
import iconCart from '../../../public/carrito-icon.svg'
import Image from 'next/image'
import Link from 'next/link'

const NavbarDesktop = () => {
    return (
        <ul className='text-black hidden bg-white md:flex gap-5'>
            <div className='flex items-center'>
                <Image src={iconLogin} width={25} height={50} alt='icon-login' />
                <li className='px-1 cursor-pointer text-[#666666]'>Login/register </li>
            </div>
            <div className='flex items-center'>
                <Image src={iconCart} width={25} height={50} alt='icon-cart' />
                <Link href={'/cart'}><li className='px-1 cursor-pointer text-[#666666]'> Carrito</li></Link>
            </div>
        </ul>
    )
}

export default NavbarDesktop
