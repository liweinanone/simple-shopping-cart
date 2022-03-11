import * as React from 'react'

import type { CartProducts } from '@/types'

interface CartContext {
    cartProducts: CartProducts
    setCartProducts(products: CartProducts): void
}

interface CartProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const cartContext = React.createContext<CartContext>({} as CartContext)

export function CartProvider({ children }: CartProviderProps) {
    const [cartProducts, setCartProducts] = React.useState<CartProducts>({})

    const cartContextValue = {
        cartProducts,
        setCartProducts,
    }

    return (
        <cartContext.Provider value={cartContextValue}>
            {children}
        </cartContext.Provider>
    )
}
