import { products } from "@/utils/Products"
import Heading from "../general/Heading"
import ProductCard from "./ProductCard"


const Products = () => {
  return (
    <div>
        <Heading text="All Products"/>
        <div className="flex items-center flex-wrap gap-4 md:gap-10 px-3 md:px-10">
            {
                products.map(product =>(
                    <ProductCard key={product.id} product ={product}/>
                ))
            }
        </div>
    </div>
  )
}

export default Products