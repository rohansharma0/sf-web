import { HttpStatusCode } from "axios";
import type { APIResponse } from "../types/APIResponse";

import { axiosInstance } from "../utils/axiosInstance";
import type { IUser } from "../types/User";
import type { IProduct } from "../types/Product";

const USER_API_URL = import.meta.env.VITE_BACKEND_URL + "/user";

export const userService = {
    updateUser: async (name: string, email: string) => {
        const res = await axiosInstance.put<any>(`${USER_API_URL}/`, {
            name,
            email,
        });
        return res.data;
    },

    getUser: async () => {
        const res = await axiosInstance.get<IUser>(`${USER_API_URL}/`);
        return res.data;
    },

    getWishlist: async () => {
        const res = await axiosInstance.get<IProduct[]>(
            `${USER_API_URL}/wishlist`
        );
        return res.data;
    },

    toggleWishlist: async (productId: string) => {
        const res = await axiosInstance.post<any>(`${USER_API_URL}/wishlist`, {
            productId,
        });

        return res.data.wishlist;
    },
};
