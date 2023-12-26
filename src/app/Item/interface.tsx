export interface Product {
    _id: number;
    title: string;
    descriptions: string;
    category: string;
    price: number;
    imageUrl: object;
    rating: object;
    options: {
        size: string,
        color: string
    };
}

export interface CartItem {
    product: Product;
    qty: number;
}