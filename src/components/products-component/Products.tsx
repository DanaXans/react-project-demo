import {useEffect, useState} from "react";
import type {ProductModel} from "../../models/ProductModel.ts";
import {getProducts} from "../../service/api.service.ts";
import {Product} from "../product-component/Product.tsx";

export const Products = () => {
    const [products, setProduct] = useState<ProductModel[]>([]);
    useEffect(() => {
        getProducts().then(value=>setProduct(value))
    },[])
    return (
        <div>
            {products.map((product) => (<Product product={product} key={product.id}/>))}
        </div>
    );
};