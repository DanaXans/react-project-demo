import type {FC} from "react";
import type {Product} from "../../models/ProductModel.ts";

type PropCart = { cart: Product };
export const Cart: FC<PropCart> = ({cart: {title, id, price, thumbnail}}) => {
    return (
        <>
            <h2>{id} {title}</h2>
            <p>{price}</p>
            <img src={thumbnail} alt={title}/>
        </>

    );
};