import * as React from 'react'

import type { Product } from '@/types'

import { Button } from '@/components'
import { formatPrice } from '@/utils/formatPrice'
import { useCart } from '@/hooks/useCart'

interface ProductItemProps {
    product: Product
}

export function ProductItem({ product }: ProductItemProps) {
    const { price, currencyId, installments, currencyFormat, title } = product
    let productInstallment: null | JSX.Element = null
    const { addProductToCart } = useCart()

    if (installments) {
        const installmentPrice = price / installments

        productInstallment = (
            <>
                <span>or {installments} x </span>
                <b>
                    {currencyFormat} {formatPrice(installmentPrice, currencyId)}
                </b>
            </>
        )
    }

    function handleAddProductToCartClicked() {
        addProductToCart(product)
    }

    return (
        <div className="product">
            <p className="product__title">{title}</p>
            <div className="product__price">
                <p className="product__price--full">
                    {formatPrice(price, currencyId)}
                </p>
                {productInstallment && (
                    <p className="product__price--installment">
                        {productInstallment}
                    </p>
                )}
            </div>
            <Button
                handleClick={handleAddProductToCartClicked}
                className="product__buy-button"
            >
                <>Add to Cart</>
            </Button>
        </div>
    )
}
