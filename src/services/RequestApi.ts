import axios from "axios";
import { Product } from "@/store";

export class RequestApi {

    protected items = [] as Array<Product>

    get info() {
        return RequestApi.request(this.items)
    }

    static request = async (items: Product []) => {  
        await axios.get('https://fakestoreapi.com/products')
        .then(({data}) =>  {
           items = data
        })
        .catch(error => console.error(error))

        return items
    }
}