import { Product, CartProduct } from '@/types'

interface CartProductProps {
    product: Product
    userSelection: CartProduct
}

export function CartProductItem({ product, userSelection }: CartProductProps) {
    return (
        <div className="product">
            {product.title} {userSelection.quantity}
        </div>
    )
}
