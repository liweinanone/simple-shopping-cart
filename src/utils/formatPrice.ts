export function formatPrice(price: number, currencyId: string): string[] {
    switch (currencyId) {
        default: {
            const formatted = price.toFixed(2).split('.')

            return formatted
        }
    }
}
