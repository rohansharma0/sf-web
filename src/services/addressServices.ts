import type { APIResponse } from "../types/APIResponse";
import { HttpStatusCode } from "axios";
import type { IAddress } from "../types/Address";
import { axiosInstance } from "../utils/axiosInstance";

const ADDRESS_API_URL = import.meta.env.VITE_BACKEND_URL + "/addresses";

export const addressService = {
    getAllAddresses: async () => {
        const res = await axiosInstance.get<APIResponse<IAddress[]>>(
            `${ADDRESS_API_URL}/`
        );
        if (res.data.code === HttpStatusCode.Ok) {
            return res.data.data;
        }
        return [];
    },

    addAddress: async (address: IAddress) => {
        const res = await axiosInstance.post<APIResponse<IAddress>>(
            `${ADDRESS_API_URL}/`,
            address
        );
        if (res.data.code === HttpStatusCode.Created) {
            return res.data.data;
        }
        return null;
    },

    updateAddress: async (address: IAddress) => {
        const res = await axiosInstance.put<APIResponse<IAddress>>(
            `${ADDRESS_API_URL}/${address._id}`,
            address
        );
        if (res.data.code === HttpStatusCode.Ok) {
            return res.data.data;
        }
        return null;
    },

    deleteAddress: async (id: string) => {
        const res = await axiosInstance.delete<APIResponse<IAddress>>(
            `${ADDRESS_API_URL}/${id}`
        );
        if (res.data.code === HttpStatusCode.Ok) {
            return true;
        }
        return false;
    },
};
