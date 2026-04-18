import type {FC} from "react";
import type {ProductModel} from "../../models/ProductModel.ts";
import './Product.css'

type Prop = { product: ProductModel };
export const Product: FC<Prop> = ({product: {title, brand, description, price, thumbnail}}) => {

    return (
        <>
            <section className='m-7'>
                <h3>{brand}</h3>
                <h2>{title}:</h2>
                <div className='wrapper'>
                    <img src={thumbnail} alt={title}/>
                    <p>{description}</p> <p>Price: {price}</p>
                </div>
            </section>
        </>
    );
};