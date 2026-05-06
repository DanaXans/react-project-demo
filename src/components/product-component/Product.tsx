import type {FC} from "react";
import type {ProductModel} from "../../models/ProductModel.ts";
import './Product.css'

type Prop = { product: ProductModel };
export const Product: FC<Prop> = ({product}) => {

    return (
        <div className="productCard">

            <div className="productHeader">
                <img src={product.thumbnail} alt={product.title}/>
                <div>
                    <h2>{product.title}</h2>
                    <p className="brand">{product.brand}</p>
                    <p className="price">${product.price}</p>
                </div>
            </div>

            <p className="description">{product.description}</p>

            <div className="tags">
                {product.tags.map((tag, i) => (
                    <span key={i}>#{tag}</span>
                ))}
            </div>

            <div className="infoGrid">
                <p><span>Category:</span><span>{product.category}</span></p>
                <p><span>Rating:</span><span>{product.rating}</span></p>
                <p><span>Stock:</span><span>{product.stock}</span></p>
                <p><span>Discount:</span><span>{product.discountPercentage}%</span></p>
            </div>

            <div className="block">
                <h4>Dimensions</h4>
                <p>W: {product.dimensions.width}</p>
                <p>H: {product.dimensions.height}</p>
                <p>D: {product.dimensions.depth}</p>
            </div>

            <div className="block">
                <h4>Reviews</h4>
                {product.reviews.map((item, i) => (
                    <div key={i} className="review">
                        <p>Rating: {item.rating}</p>
                        <p>{item.comment}</p>
                        <p>{item.reviewerName}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};