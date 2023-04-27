export class Amount {
    private price: number
    private quantity: number

    constructor(price: number, quantity: number) {
        this.price = price
        this.quantity = quantity
    }

    get subtotal() {
        let total = 0
        total += this.price * this.quantity
        return total.toFixed(2)
    }
}