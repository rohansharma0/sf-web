import axios from "axios";
import type { ISubCategory } from "../types/SubCategory";

const SUBCATEGORY_API_URL = import.meta.env.VITE_BACKEND_URL + "/subcategories";

export const subCategoryService = {
    getSubCategoryById: async (id: string) => {
        const res = await axios.get<ISubCategory>(
            `${SUBCATEGORY_API_URL}/${id}`
        );
        return res.data;
    },
};
