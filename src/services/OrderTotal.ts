import { Product } from "@/store"

export class OrderTotal {
    private products: Product []

    constructor(products: Product[]) {
        this.products = products
    }

    get total() {
        let total = 0
        this.products.forEach((item) => {
            total += item.price * item.quantity
        })
        return total.toFixed(2)
    }
}

export class ItemTotal {
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