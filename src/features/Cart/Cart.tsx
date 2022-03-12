import * as React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

import './cart.scss'

import { productsContext } from '@/providers'
import { buildClassName } from '@/utils/buildClassName'
import { CartProductItem } from './CartProduct'
import { useCart } from '@/hooks/useCart'

export function Cart() {
    const [isOpen, setIsOpen] = React.useState(false)
    const { products } = React.useContext(productsContext)
    const {
        cartProducts,
        addProductToCart,
        removeProductFromCart,
        deleteProductFromCart,
        checkoutCart,
    } = useCart()
    let buyButtonIcon = isOpen ? <AiOutlineClose /> : <FaCartPlus />
    let cartContent: JSX.Element | null = null
    let checkout: JSX.Element | null = null
    let totalPrice = 0

    if (isOpen) {
        const productItems = Object.entries(cartProducts)

        if (productItems.length === 0) {
            cartContent = (
                <p className="open-cart__no-content">
                    Add some products in the cart
                    <br />
                    <br />
                    :)
                </p>
            )
        } else {
            cartContent = (
                <div className="open-cart__products">
                    {Object.entries(cartProducts)
                        .sort((a, b) => a[1].addAt - b[1].addAt)
                        .map(([productId, cartProduct]) => {
                            const product = products[productId]
                            totalPrice += product.price * cartProduct.quantity

                            return (
                                <CartProductItem
                                    addProductToCart={addProductToCart}
                                    removeProductFromCart={removeProductFromCart}
                                    deleteProductFromCart={deleteProductFromCart}
                                    product={product}
                                    userSelection={cartProduct}
                                    key={productId}
                                />
                            )
                        })}
                </div>
            )

            checkout = (
                <div className="open-cart__checkout">
                    <p className="open-cart__checkout--price">
                        <span>SUBTOTAL</span>
                        <span>{totalPrice.toFixed(2)}</span>
                    </p>
                    <button
                        className="open-cart__checkout--button"
                        onClick={handleCheckoutClicked}
                    >
                        Checkout
                    </button>
                </div>
            )
        }
    }

    function handleCheckoutClicked() {
        alert(`Journey comes to an end \nCheckout: ${totalPrice.toFixed(2)}`)
        checkoutCart()
    }

    return (
        <div className={buildClassName('cart', isOpen ? 'open-cart' : undefined)}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={buildClassName(
                    'cart__button',
                    isOpen ? 'open-cart__button' : undefined
                )}
            >
                {buyButtonIcon}
            </button>
            <>{cartContent}</>
            <>{checkout}</>
        </div>
    )
}
