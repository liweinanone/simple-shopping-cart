import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'

import { Product, CartProduct } from '@/types'

interface CartProductProps {
    product: Product
    userSelection: CartProduct
    addProductToCart: (product: Product) => void
    removeProductFromCart: (productId: string) => void
    deleteProductFromCart: (productId: string) => void
}

export function CartProductItem({
    product,
    userSelection,
    addProductToCart,
    removeProductFromCart,
    deleteProductFromCart,
}: CartProductProps) {
    const { sku, title, price, id, currencyFormat } = product

    return (
        <div className="cart-product">
            <div className="cart-product__image">
                <img
                    src={require(`@/static/products/${sku}-1-cart.webp`)}
                    alt={title}
                />
            </div>
            <div className="cart-product__column">
                <p className="cart-product__column--title">{title}</p>
                <p className="cart-product__column--quantity">
                    Quantity: {userSelection.quantity}
                </p>
            </div>
            <div className="cart-product__column">
                <div className="cart-product__column--delete">
                    <button
                        onClick={() => deleteProductFromCart(id)}
                        className="cart-product__column--delete"
                    >
                        <MdDelete />
                    </button>
                </div>
                <p className="cart-product__column--price">
                    {currencyFormat} {price}
                </p>
                <div className="cart-product__column--buttons">
                    <button
                        onClick={() => addProductToCart(product)}
                        className="increment"
                    >
                        <AiOutlinePlus />
                    </button>
                    <button
                        onClick={() => removeProductFromCart(id)}
                        className="decrement"
                    >
                        <AiOutlineMinus />
                    </button>
                </div>
            </div>
        </div>
    )
}
