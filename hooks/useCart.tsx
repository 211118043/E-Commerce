"use client";

import { CardProductProps } from "@/app/components/details/DetailClient";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

interface CartContextProps {
    productCartQty: number;
    cartPrdcts: CardProductProps[]; // null yerine boş dizi
    addToBasket: (product: CardProductProps) => void;
}

const CartContext = createContext<CartContextProps | null>(null);

interface Props {
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
    const [productCartQty, setProductCartQty] = useState(0);
    const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[]>([]); // Başlangıç değeri boş dizi

    const addToBasket = useCallback((product: CardProductProps) => {
        setCartPrdcts(prev => [...prev, product]); // Daha basit güncelleme
    }, []);

    useEffect(() => {
        console.log('Updated cartPrdcts:', cartPrdcts);
    }, [cartPrdcts]);

    const value = {
        productCartQty,
        addToBasket,
        cartPrdcts
    };

    return (
        <CartContext.Provider value={value} {...props} />
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (context === null) {
        throw new Error('Cart context must be used within a CartProvider');
    }
    return context;
}

export default useCart;
