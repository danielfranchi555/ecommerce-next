'use client'
import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { Button } from '../ui/button'
import { useGetProductsQuery } from '@/app/redux/services/getData'
import Link from 'next/link'
import Image from 'next/image'

const ProductsOffert = () => {
    
    const { data, error, isLoading, isFetching } = useGetProductsQuery()
    const products = data?.message

    if (isLoading || isFetching) {
        return <p>loading</p>
    }

    if (error) {
        return <p>error</p>
    }


    const filterProd = products.filter((prod) => prod.offert === true);
    console.log(filterProd);
    return (
        <Carousel opts={{ align: "start", }} className="w-[100%] mx-auto mt-10  ">
            <h3 className='text-[#666666] text-[18px] mb-4'>Las mejores opciones para tu <span className='text-blue-400 font-bold'>Celular</span></h3>
            <CarouselContent className=' flex gap-14 md:gap-4'>
                {filterProd?.map((item) => (
                    <CarouselItem key={item._id} className=" basis-1/2 md:basis-1/3 lg:basis-1/6 ">
                        <div className="p-0  m-0">
                            <Card className=' w-[220px] m-0 '>
                                <CardContent className='flex rounded-xl flex-col aspect-square items-center justify-center p-0 bg-[#F5F5F5] relative'>
                                    <div className='absolute top-0 right-0 p-2 flex flex-col bg-[#008ECC] rounded-tr rounded-bl text-white'>
                                        <span className='text-[12px]'>50%</span>
                                        <span className='text-[12px]'>OFF</span>
                                    </div>
                                    <Image alt='image' src={item.image} width={100} height={100} className='w-[150px] h-[140px] ' />
                                </CardContent>
                                <CardFooter className='flex flex-col items-start mt-3 px-2  gap-2'>
                                    <div className='flex flex-col gap-3'>
                                        <p className='text-[12px]  h-[20px]'>{item.name}</p>
                                        <p className='text-[12px]  font-bold'>${item.price}</p>
                                    </div>
                                    <Link href={`/productDetail/${item._id}`}>
                                        <Button className="w-full bg-[#F5F5F5] text-blue-400">
                                            Ver Producto
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}

export default ProductsOffert
