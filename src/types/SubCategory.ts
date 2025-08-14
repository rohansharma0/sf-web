import type { IProduct } from "./Product";

export interface ISubCategory {
    _id: string;
    title: string;
    description: string;
    image: string;
    products: IProduct[];
    isBanner: boolean;
}
