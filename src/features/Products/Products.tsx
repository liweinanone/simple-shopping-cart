import * as React from 'react'

import { useProducts } from '@/hooks/useProducts'
import { ProductItem } from './ProductItem'
import { Loader } from '@/components'

export function Products() {
    const { status, products } = useProducts()

    let productsContent: JSX.Element | JSX.Element[]

    if (status === 'success') {
        productsContent = Object.values(products).map((product) => (
            <ProductItem product={product} key={product.id} />
        ))
    } else {
        productsContent = <Loader />
    }

    return (
        <section className="products">
            <>{productsContent}</>
        </section>
    )
}
