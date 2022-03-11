import * as React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import { App } from '@/features'
import { ProductsProvider } from '@/providers'

ReactDOM.render(
    <React.StrictMode>
        <ProductsProvider>
            <App />
        </ProductsProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
