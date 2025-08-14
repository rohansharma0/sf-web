import type { APIResponse } from "../types/APIResponse";
import axios, { HttpStatusCode } from "axios";
import type { ICategory } from "../types/Category";

const CATEGORY_API_URL = import.meta.env.VITE_BACKEND_URL + "/categories";

export const categoryService = {
    getAllCategories: async () => {
        const res = await axios.get<APIResponse<ICategory[]>>(
            `${CATEGORY_API_URL}/`
        );
        if (res.data.code === HttpStatusCode.Ok) {
            return res.data.data;
        }
        return [];
    },

    getCategoryById: async (id: string) => {
        const res = await axios.get<APIResponse<ICategory>>(
            `${CATEGORY_API_URL}/${id}`
        );
        if (res.data.code === HttpStatusCode.Ok) {
            return res.data.data;
        }
        return null;
    },
};
