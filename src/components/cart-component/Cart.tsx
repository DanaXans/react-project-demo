import type {FC} from "react";
import type {ProductsItem} from "../../models/CartModel.ts";

type PropCart = { cart: ProductsItem };
export const Cart: FC<PropCart> = ({cart: {title, id, price, thumbnail}}) => {
    return (
        <>
            <h2>{id} {title}</h2>
            <p>{price}</p>
            <img src={thumbnail} alt={title}/>
        </>

    );
};