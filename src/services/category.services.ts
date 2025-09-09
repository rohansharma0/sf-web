import axios from "axios";
import type { ICategory } from "../types/Category";

const CATEGORY_API_URL = import.meta.env.VITE_BACKEND_URL + "/categories";

export const categoryService = {
    getAllCategories: async () => {
        const res = await axios.get<ICategory[]>(`${CATEGORY_API_URL}/`);
        return res.data;
    },

    getCategoryById: async (id: string) => {
        const res = await axios.get<ICategory>(`${CATEGORY_API_URL}/${id}`);
        return res.data;
    },
};
