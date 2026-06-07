import {useCallback, useState} from "react";
import ProductCard from "../memo-components/MemoProductCard.tsx";
import {products} from "./MemoPage.tsx";

export default function UseCallbackPage() {
    const [count, setCount] = useState(0);

    const handleBuy = useCallback(() => {
        console.log("Buy product");
    }, []);

    return (
        <div className="section">
            <h2>useCallback</h2>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>

            <ProductCard product={products[0]} onBuy={handleBuy}/>
        </div>
    );
}