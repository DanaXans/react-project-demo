import { memo } from "react";
import type {Product} from "../pages/MemoPage.tsx";

type Props = {
    product: Product;
    onBuy?: () => void;
};

const ProductCard = memo(function ProductCard({ product }:Props) {
    console.log(`Card ${product.title} render`);

    return (
        <div>
            <h3>{product.title}</h3>
        </div>
    );
});

export default ProductCard;