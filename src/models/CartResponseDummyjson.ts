import type {CartModel} from "./CartModel.ts";

export interface CartResponseDummyJson {
    carts: CartModel[],
    total: number,
    skip: number,
    limit: number,
}