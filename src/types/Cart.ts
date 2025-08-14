import type { IProduct } from "./Product";

export interface ICart {
    _id: string;
    user: string;
    items: ICartItem[];
}

export interface ICartItem {
    product: IProduct;
    quantity: number;
}
