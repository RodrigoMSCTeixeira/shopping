import { Product } from "../interfaces/Product"

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