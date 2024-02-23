import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Product = ({ item }) => {
    
    console.log(item);
    return (
        <div>
            <Image src={item.image} width={100} height={100} />
            <Link href={`/productDetail/${item._id}`}>  <button className='bg-slate-400 px-5 py-2 rounded-md'>Comprar</button></Link>
        </div>
    )
}

export default Product
