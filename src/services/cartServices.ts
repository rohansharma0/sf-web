import { axiosInstance } from "../utils/axiosInstance";
import type { ICart } from "../types/Cart";

const CART_API_URL = import.meta.env.VITE_BACKEND_URL + "/cart";

export const cartService = {
    getCart: async () => {
        const res = await axiosInstance.get<ICart>(`${CART_API_URL}`);
        return res.data;
    },

    addToCart: async (productId: string, quantity = 1) => {
        const res = await axiosInstance.post<any>(`${CART_API_URL}`, {
            productId,
            quantity,
        });
        return res.data;
    },

    removeFromCart: async (productId: string) => {
        const res = await axiosInstance.delete<any>(
            `${CART_API_URL}/${productId}`
        );
        return res.data;
    },
};
