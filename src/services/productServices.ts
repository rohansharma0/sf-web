import type { APIResponse } from "../types/APIResponse";
import axios, { HttpStatusCode } from "axios";
import type { IProduct } from "../types/Product";

const PRODUCT_API_URL = import.meta.env.VITE_BACKEND_URL + "/products";

export const productService = {
    getProductById: async (id: string) => {
        const res = await axios.get<APIResponse<IProduct>>(
            `${PRODUCT_API_URL}/${id}`
        );
        if (res.data.code === HttpStatusCode.Ok) {
            return res.data.data;
        }
        return null;
    },
};
