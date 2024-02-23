'use client'
import React, { useState } from 'react'
import iconArrow from '../../../public/Arrow-categorie.svg'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useGetProductsQuery } from '@/app/redux/services/getData'
import Link from 'next/link'

const Categories = () => {

    const { data, error, isLoading, isFetching } = useGetProductsQuery()

    const [categorie, setCategorie] = useState('')

    const handleCategorie = (cat) => {
        setCategorie(cat)
        console.log(categorie);
    }
    const categories = ['Celulares', 'Tablets', 'Auriculares', 'Televisores', 'Notebooks', 'Perifericos']

    return (
        <>
            <ul className='w-full bg-white'>
                <div className='bg-white border-t-2 text-white  hidden md:flex py-3 md:justify-between w-[95%] mx-auto'>
                    {
                        categories.map((item) => (
                            <div key={item} className='bg-[#F3F9FB] flex items-center py-2 px-3 rounded-full gap-2'>
                                <li className='text-center text-black items-center' onClick={() => handleCategorie(item)}>
                                 <Link href={`/categories/${item}`}> {item} </Link>    
                                </li>
                            </div>
                        ))
                    }

                </div>

            </ul>

        </>

    )
}

export default Categories
