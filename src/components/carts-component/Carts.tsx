import {useEffect, useState} from "react";
import type {CartModel} from "../../models/CartModel.ts";
import {loadCarts} from "../../service/api.service.ts";
import {Cart} from "../cart-component/Cart.tsx";

export const Carts = () => {
    const [carts, setCarts] = useState<CartModel[]>([]);
    useEffect(()=>{
        loadCarts().then(value=> setCarts(value));
    },[]);
    return (
        <div>{carts.map((cart)=>cart.products.map((product)=>(<Cart cart={product} key={product.id}/>)))}</div>
    );
};