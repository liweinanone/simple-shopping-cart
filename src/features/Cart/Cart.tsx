import * as React from 'react'

import { cartContext, productsContext } from '@/providers'
import { CartProductItem } from './CartProduct'

export function Cart() {
    const [isOpen, setIsOpen] = React.useState(false)
    const { cartProducts } = React.useContext(cartContext)
    const { products } = React.useContext(productsContext)

    let cartContent: JSX.Element | null = null

    if (isOpen) {
        cartContent = (
            <>
                {Object.entries(cartProducts)
                    .sort((a, b) => a[1].addAt - b[1].addAt)
                    .map(([productId, cartProduct]) => {
                        const product = products[productId]

                        return (
                            <CartProductItem
                                product={product}
                                userSelection={cartProduct}
                                key={productId}
                            />
                        )
                    })}
            </>
        )
    }

    return (
        <div className="cart">
            <button onClick={() => setIsOpen(!isOpen)} className="cart__open-button">
                open
            </button>
            <div className="cart__products">{cartContent}</div>
        </div>
    )
}
