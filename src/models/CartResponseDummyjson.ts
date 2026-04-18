import type {CartI} from "./ProductModel.ts";

export interface CartResponseDummyJson {
    carts: CartI[],
    total: number,
    skip: number,
    limit: number,
}