"use client";

import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import Counter from "../general/Counter";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import Button from "../general/Button";
import Comment from "./Comment";
import Heading from "../general/Heading";
import useCart from "@/hooks/useCart";

export type CardProductProps = {
    id: string
    name: string
    desc: string,
    price: number
    quantity: number
    image: string
    inStock: boolean
}

const DetailClient = ({ product }: { product: any }) => {

    const { productCartQty, addToBasket, cartPrdcts } = useCart();

    useEffect(() => {
        console.log('Updated cartPrdcts:', cartPrdcts);
    }, [cartPrdcts]);

    console.log(cartPrdcts, "cartPrdcts")

    const [cardProduct, setCardProduct] = useState<CardProductProps>({
        id: product.id,
        name: product.name,
        desc: product.desc,
        price: product.price,
        quantity: 1,
        image: product.picture,
        inStock: product.inStock,
    })

    const increaseFunc = () => {
        if (cardProduct.quantity == 10) return
        setCardProduct(prev => ({ ...prev, quantity: prev.quantity + 1 }))
    }
    const decreaseFunc = () => {
        if (cardProduct.quantity == 1) return
        setCardProduct(prev => ({ ...prev, quantity: prev.quantity - 1 }))
    }

    let productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length
    console.log(cardProduct, "cardProduct")

    return (
        <div className="my-10">
            <PageContainer>
                <div className="block md:flex gap-10 justify-center">
                    <div className="relative h-[200px] md:h-[400px] w-[200px] md:w-[400px] mb-3 md:mb-0">
                        <Image
                            src={product?.picture}
                            fill
                            alt=""
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-3">
                        <div className="text-xl md:text-2xl">{product.name}</div>
                        <Rating name="read-only" value={productRating} readOnly />
                        <div className="text-slate-500">{product.desc}</div>
                        <div className="flex items-center gap-2">
                            <div>Stock Availability:</div>
                            {product.inStock ? (
                                <div className="text-green-500">Product available in stock</div>
                            ) : (
                                <div className="text-red-500">The product is out of stock</div>
                            )}
                        </div>
                        <Counter increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} cardProduct={cardProduct} />
                        <div className="text-lg md:text-2xl text-pink-500 font-bold">
                            {product.price}
                        </div>
                        <Button text="Add to cart" onClick={() => addToBasket(cardProduct)} small={true} />
                    </div>
                </div>
                <Heading text="Comments" />
                <div>
                    {
                        product?.reviews?.map((prd: any) => (
                            <Comment prd={prd} key={prd.id} />
                        ))
                    }
                </div>
            </PageContainer>
        </div>
    );
}

export default DetailClient;

