"use client"

import Image from "next/image"
import { Rating } from "@mui/material"
import textClip from "@/utils/TextClip"
import { useRouter } from "next/navigation"
const ProductCard = ({ product }: { product: any }) => {
    const router = useRouter()

let productRating = product?.reviews?.reduce((acc: number , item : any) =>acc+ item.rating, 0)/product?.reviews?.length

    return (
        <div onClick= {()=>router.push(`product/${product.id}`)}className="w-[240px] shadow-lg p-2 rounded-xl flex flex-col flex-1 cursor-pointer">
            <div className="relative h-[200px] ">
                {/* object fit resimler kartı kaplasın diye */}
                <Image src={product.picture} fill alt="" className="object-fit" />
            </div>
            <div className="text-center mt-2 space-y-2">
                <div>{textClip(product.name)}</div>
                <Rating name="read-only" value={productRating} readOnly />
                <div className="text-pink-400 text-lg md:text-xl font-bold">{product.price}</div>
            </div>
        </div>
    )
}

export default ProductCard
