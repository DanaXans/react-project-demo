import {useState} from "react";
import ProductCard from "../memo-components/MemoProductCard.tsx";

export type Product = {
    id: number,
    title: string,
}

export const products: Product[] = [
    {id: 1, title: "Mouse"},
    {id: 2, title: "Computer"},
    {id: 3, title: "TV"},
];

export default function MemoPage() {
    const [search, setSearch] = useState("");

    console.log("ProductsPage render");

    return (
        <div className="section">
            <h2>React.memo</h2>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Введите текст"/>

            {products.map((product) => (<ProductCard key={product.id} product={product}/>))}
        </div>
    )
};
