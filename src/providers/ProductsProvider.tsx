import * as React from 'react'

import type { Products } from '@/types'

type RequestStatus = 'idle' | 'pending' | 'success'
interface ProductsContext {
    status: RequestStatus
    setStatus(state: RequestStatus): void
    products: Products
    setProducts(products: Products): void
}

interface ProductsProviderProps {
    children: JSX.Element
}

export const productsContext = React.createContext<ProductsContext>(
    {} as ProductsContext
)

export function ProductsProvider({ children }: ProductsProviderProps) {
    const [status, setStatus] = React.useState<RequestStatus>('idle')
    const [products, setProducts] = React.useState<Products>({})

    const productsContextValue = {
        status,
        setStatus,
        products,
        setProducts,
    }

    return (
        <productsContext.Provider value={productsContextValue}>
            {children}
        </productsContext.Provider>
    )
}
