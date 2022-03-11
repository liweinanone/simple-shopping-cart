import * as React from 'react'

import type { Product } from '@/types'

import { cartContext } from '@/providers'

export function useCart() {
    const { cartProducts, setCartProducts } = React.useContext(cartContext)

    function addProductToCart(product: Product) {
        let newCartProducts = { ...cartProducts }
        const id = product.id

        if (newCartProducts[id]) {
            newCartProducts[id].quantity++
        } else {
            newCartProducts[id] = {
                quantity: 1,
                addAt: Date.now(),
            }
        }

        setCartProducts(newCartProducts)
    }

    function removeProductFromCart(productId: string) {
        let newCartProducts = { ...cartProducts }

        newCartProducts[productId].quantity--

        if (newCartProducts[productId].quantity === 0) {
            deleteProductFromCart(productId)

            return
        }

        setCartProducts(newCartProducts)
    }

    function deleteProductFromCart(productId: string) {
        let newCartProducts = { ...cartProducts }

        delete newCartProducts[productId]

        setCartProducts(newCartProducts)
    }

    function checkoutCart() {
        alert('Checkout cart')

        setCartProducts({})
    }

    return {
        addProductToCart,
        removeProductFromCart,
        deleteProductFromCart,
        checkoutCart,
    }
}
