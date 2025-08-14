import type { APIResponse } from "../types/APIResponse";
import axios, { HttpStatusCode } from "axios";
import type { ISubCategory } from "../types/SubCategory";

const SUBCATEGORY_API_URL = import.meta.env.VITE_BACKEND_URL + "/subcategories";

export const subCategoryService = {
    getSubCategoryById: async (id: string) => {
        const res = await axios.get<APIResponse<ISubCategory>>(
            `${SUBCATEGORY_API_URL}/${id}`
        );
        if (res.data.code === HttpStatusCode.Ok) {
            return res.data.data;
        }
        return null;
    },
};
