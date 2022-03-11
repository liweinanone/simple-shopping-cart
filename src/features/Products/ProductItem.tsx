import type { Product } from '@/types'

interface ProductItemProps {
    product: Product
}

export function ProductItem({ product }: ProductItemProps) {
    return <div className="product">{product.title}</div>
}
