'use client'
import loading from '@/app/loading'
import { useGetProductByIdQuery } from '@/app/redux/services/getData'
import connectDB from '@/utils/mongoose'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async ({ params }) => {

    const id = params.id
    const { data, error, isLoading } = useGetProductByIdQuery(id)

    if (error) {
        return <p>error{`error:${error}`}</p>
        console.log(error);
    }

    if (isLoading) {
        return <p>loading</p>
    }
    const product = data

    console.log(data);
    console.log(id);

    return (
        <div className=' flex flex-col md:grid md:grid-cols-2 w-[90%] mx-auto'>

            <div className='flex items-center justify-center'>
                <Image src={product.image} width={100} height={100} alt='product' className='w-[50%] object-cover' />
            </div>
            <div className='flex flex-col gap-5'>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
            </div>

            <Link href={'/'} className='bg-slate-500 rounded-lg px-5 py-2 text-center mt-5'>Comprar</Link>
        </div>
    )
}

export default page
