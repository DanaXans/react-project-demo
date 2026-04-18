import type {CartResponseDummyJson} from "../models/CartResponseDummyjson.ts";
import type {CartI} from "../models/ProductModel.ts";
const dataCarts = import.meta.env.VITE_API_BASE_URL + '/carts';

export const getCarts = async (): Promise<CartI[]> => {
    const response: CartResponseDummyJson = await fetch(dataCarts)
        .then(value => value.json())
    return response.carts;
}
