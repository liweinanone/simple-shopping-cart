import * as React from 'react'

import type { Products, Product } from '@/types'

import { productsContext } from '@/providers'
import { fetchDataByPath } from '@/services/firebase'

export function useProducts() {
    const { status, setStatus, products, setProducts } =
        React.useContext(productsContext)

    React.useEffect(() => {
        setStatus('pending')

        fetchDataByPath<Product>('products').then((products) => {
            const hashedProducts = products.reduce<Products>((acc, product) => {
                acc[product.id] = product

                return acc
            }, {})

            setProducts(hashedProducts)
            setStatus('success')
        })

        return () => {
            setStatus('idle')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // function fetchProducts() {
    //     setStatus('pending')

    //     fetchDataByPath<Product>('products').then((products) => {
    //         const hashedProducts = products.reduce<Products>((acc, product) => {
    //             acc[product.id] = product

    //             return acc
    //         }, {})

    //         setProducts(hashedProducts)
    //         setStatus('success')
    //     })
    // }

    return { status, products }
}
