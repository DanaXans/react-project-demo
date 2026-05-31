import type {IProduct} from "./IProduct.ts";

export type IBaseResponceModelType = {//тип відповіді сервера при отриманні списку товарів
    total: number;
    skip: number;
    limit: number;
    products: IProduct[];

}