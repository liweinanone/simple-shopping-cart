export function formatPrice(price: number, currencyId: string): string {
    switch (currencyId) {
        default:
            return price.toFixed(2)
    }
}
