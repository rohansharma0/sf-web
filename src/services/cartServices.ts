import type { APIResponse } from "../types/APIResponse";
import { HttpStatusCode } from "axios";
import { axiosInstance } from "../utils/axiosInstance";
import type { ICart } from "../types/Cart";

const CART_API_URL = import.meta.env.VITE_BACKEND_URL + "/cart";

export const cartService = {
    getCart: async () => {
        const res = await axiosInstance.get<APIResponse<ICart>>(
            `${CART_API_URL}`
        );
        if (res.data.code === HttpStatusCode.Ok) {
            return res.data.data;
        }
    },

    addToCart: async (productId: string, quantity = 1) => {
        const res = await axiosInstance.post<APIResponse<any>>(
            `${CART_API_URL}`,
            {
                productId,
                quantity,
            }
        );
        if (res.data.code === HttpStatusCode.Ok) {
            return res.data.data;
        }
        return null;
    },

    removeFromCart: async (productId: string) => {
        const res = await axiosInstance.delete<APIResponse<any>>(
            `${CART_API_URL}/${productId}`
        );
        if (res.data.code === HttpStatusCode.Ok) {
            return res.data.data;
        }
        return null;
    },
};
