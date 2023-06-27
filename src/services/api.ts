import type { ProductsResult } from "./types/Products"
import axios from "axios";

export async function getData(searchTerm:string) {
    const response: ProductsResult = await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
        .then(res => res.data)
        
    return response
}