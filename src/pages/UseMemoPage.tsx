import {useMemo, useState} from "react";
import {products} from "./MemoPage.tsx";

export default function UseMemoPage() {

    const [search, setSearch] = useState("");
    const filteredProducts = useMemo(() => {

        console.log("Зачекайте...");

        return products.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase()));
    }, [search]);

    return (
        <div className="section">
            <h2>useMemo</h2>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Поиск товара"/>

            {filteredProducts.map((product) => (<div key={product.id} className="product">{product.title}</div>))}
        </div>
    );
}