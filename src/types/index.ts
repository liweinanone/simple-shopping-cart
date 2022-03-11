export type Size = 'XS' | 'S' | 'M' | 'ML' | 'L' | 'XL' | 'XXL'

export interface Product {
    availableSizes: Size[]
    currencyFormat: string
    currencyId: string
    installments: number
    price: number
    sku: string
    title: string
    id: string
}
export type Products = Record<string, Product>

export interface CartProduct {
    quantity: number
    addAt: number
}
export type CartProducts = Record<string, CartProduct>
