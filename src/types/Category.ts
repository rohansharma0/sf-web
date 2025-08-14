import type { IProduct } from "./Product";
import type { ISubCategory } from "./SubCategory";

export interface ICategory {
    _id: string;
    title: string;
    description: string;
    image: string;
    subCategories: ISubCategory[];
    products: IProduct[];
    isBanner: boolean;
}
