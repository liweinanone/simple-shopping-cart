import * as React from 'react'

import type { Product } from '@/types'

import { Button } from '@/components'
import { formatPrice } from '@/utils/formatPrice'
import { useCart } from '@/hooks/useCart'

interface ProductItemProps {
    product: Product
}

export function ProductItem({ product }: ProductItemProps) {
    const { addProductToCart } = useCart()
    const { price, currencyId, installments, currencyFormat, title, sku } = product
    const [firstPrice, secondPrice] = formatPrice(price, currencyId)
    let productInstallment: null | JSX.Element = null

    if (installments) {
        const installmentPrice = price / installments
        const [firstPrice, secondPrice] = formatPrice(installmentPrice, currencyId)

        productInstallment = (
            <>
                <small>or {installments} x </small>
                <small>{currencyFormat}</small>
                <small>
                    {firstPrice}.{secondPrice}
                </small>
            </>
        )
    }

    function handleAddProductToCartClicked() {
        addProductToCart(product)
    }

    return (
        <div className="product">
            <div className="product__image">
                <img
                    src={require(`@/static/products/${sku}-1-product.webp`)}
                    alt={title}
                    loading="lazy"
                />
            </div>
            <p className="product__title">{title}</p>
            <div className="product__price">
                <p className="product__price--full">
                    <span>{currencyFormat}</span>
                    <b>{firstPrice}</b>
                    <small>.{secondPrice}</small>
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
