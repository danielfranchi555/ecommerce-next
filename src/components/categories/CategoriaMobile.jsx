'use client'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import celCategorie from '../../../public/images/celulares-categories.png'
import gamingCategorie from '../../../public/images/gaming-categorie.png'
import auriCategorie from '../../../public/images/auriculares-categorie.png'
import tvCategorie from '../../../public/images/tv-categorie.png'
import placasCategorie from '../../../public/images/placas-categorie.png'
import electroCategorie from '../../../public/images/electro-categorie.png'
import monitorCategorie from '../../../public/images/monitores-categorie.png'

import Image from 'next/image'
import { Montaga } from 'next/font/google'

const CategoriaMobile = () => {

    const arr = [
        {
            image: celCategorie,
            title: 'Celulares'
        },
        {
            image: gamingCategorie,
            title: 'Gaming'
        },
        {
            image: auriCategorie,
            title: 'Auriculares'
        },
        {
            image: tvCategorie,
            title: 'Televisores'
        },
        {
            image: placasCategorie,
            title: 'Placas de video'
        },
        {
            image: electroCategorie,
            title: 'Electrodomesticos'
        },
        {
            image: monitorCategorie,
            title: 'Monitores'
        }
    ]

    return (
        <div className='w-[95%] mx-auto md:hidden'>
            <div className='bg-slate-50 py-2 px-4 rounded-md mt-2 shadow-lg'>
                <p className='text-[12px]'> <span className='text-green-500'>Envio Gratis </span> en millones de productos desde $23.000</p>
            </div>
            <Carousel className=" py-10">
                <CarouselContent className="ml-0 flex gap-5 ">
                    {
                        arr.map((item) => (
                            <CarouselItem key={item} className=' max-w-max flex flex-col gap-1 '>
                                <div className='bg-slate-50 rounded-full shadow-xl flex items-center justify-center  w-[70px] '>
                                    <Image src={item.image} width='auto' height='auto' alt='image-carrousel-mobile' className=' w-[100%] h-[60px] object-cover py-3 px-2 ' />
                                </div>
                                <span className='text-[10px] text-center '>{item.title}</span>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </div>

    )
}

export default CategoriaMobile
