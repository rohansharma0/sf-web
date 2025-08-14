import { HttpStatusCode } from "axios";
import type { APIResponse } from "../types/APIResponse";

import { axiosInstance } from "../utils/axiosInstance";
import type { IUser } from "../types/User";
import type { IProduct } from "../types/Product";

const USER_API_URL = import.meta.env.VITE_BACKEND_URL + "/user";

export const userService = {
    updateUser: async (name: string, email: string) => {
        const res = await axiosInstance.put<APIResponse<any>>(
            `${USER_API_URL}/`,
            {
                name,
                email,
            }
        );
        if (res.data.code === HttpStatusCode.Ok) {
            return res.data.data;
        }
        return null;
    },

    getUser: async () => {
        const res = await axiosInstance.get<APIResponse<IUser>>(
            `${USER_API_URL}/`
        );
        if (res.data.code !== HttpStatusCode.Ok) {
            throw new Error(res.data.info || "Failed to fetch user");
        }

        return res.data.data;
    },

    getWishlist: async () => {
        const res = await axiosInstance.get<APIResponse<IProduct[]>>(
            `${USER_API_URL}/wishlist`
        );
        if (res.data.code !== HttpStatusCode.Ok) {
            throw new Error(res.data.info || "Failed to fetch wishlist");
        }

        return res.data.data;
    },

    toggleWishlist: async (productId: string) => {
        const res = await axiosInstance.post<APIResponse<any>>(
            `${USER_API_URL}/wishlist`,
            { productId }
        );
        if (res.data.code !== HttpStatusCode.Ok) {
            throw new Error(res.data.info || "Failed to fetch wishlist");
        }

        return res.data.data.wishlist;
    },
};
