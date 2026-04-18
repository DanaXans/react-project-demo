import type {ResponseProduct} from "../models/ResponseProduct.ts";
import type {ProductModel} from "../models/ProductModel.ts";

const dataProducts= import.meta.env.VITE_API_BASE_URL + '/products'

export const getProducts=async (): Promise<ProductModel[]> => {
    const response :ResponseProduct =await fetch(dataProducts)
    .then(value=>value.json())
    return response.products;
}