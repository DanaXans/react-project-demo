import {useEffect, useState} from "react";
import type {CartI} from "../../models/ProductModel.ts";
import {getCarts} from "../../service/api.service.ts";
import {Cart} from "../cart-component/Cart.tsx";

export const Carts = () => {
    const [carts, setCart] = useState<CartI[]>([]);
    useEffect(()=>{
        getCarts().then(value=> setCart(value));
    },[]);
    return (
        <div>
            {carts.map((cart)=>(<Cart cart={cart} key={cart.id}/>))}
        </div>
    );
};