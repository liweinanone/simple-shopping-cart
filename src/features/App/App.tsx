import './app.scss'

import { Products, Cart } from '@/features'
import { CartProvider } from '@/providers'

export function App() {
    return (
        <main>
            <CartProvider>
                <Cart />
                <Products />
            </CartProvider>
        </main>
    )
}
