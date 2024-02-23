import Hero from '../hero/Hero'
import CategoriaMobile from '../categories/CategoriaMobile'
import Categories from '../categories/Categories'
import ProductsOffert from '../productsOffert.jsx/ProductsOffert'

const Container = () => {

    return (
        <div className='w-[100%]'>
            <Hero />
            <CategoriaMobile />
            <ProductsOffert />
        </div>

    )
}

export default Container
