import axios from "axios";
import type { IProduct } from "../types/Product";

const PRODUCT_API_URL = import.meta.env.VITE_BACKEND_URL + "/products";

export const productService = {
    getProductById: async (id: string) => {
        const res = await axios.get<IProduct>(`${PRODUCT_API_URL}/${id}`);
        return res.data;
    },
};
