import type {CartResponseDummyJson} from "../models/CartResponseDummyjson.ts";
import type {CartModel} from "../models/CartModel.ts";
const dataCarts = import.meta.env.VITE_API_BASE_URL + '/carts';

export const loadCarts = async (): Promise<CartModel[]> => {
    const response: CartResponseDummyJson = await fetch(dataCarts)
        .then(value => value.json())

    return response.carts;
}
