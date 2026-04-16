export interface CartModel {
    discountedTotal: number;
    total: number;
    totalQuantity: number;
    totalProducts: number;
    id: number;
    userId: number;
    products: ProductsItem[];
}

export interface ProductsItem {
    discountPercentage: number;
    discountedTotal: number;
    total: number;
    thumbnail: string;
    quantity: number;
    price: number;
    id: number;
    title: string;
}

