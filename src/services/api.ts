import type { ProductsResult } from "./types/Products"

export async function getData(searchTerm:string) {
    //https://dummyjson.com/products
    
    const response: ProductsResult = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
        .then(res => res.json())
        
    return response
}