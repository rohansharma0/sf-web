import type { IAddress } from "../types/Address";
import { axiosInstance } from "../utils/axiosInstance";

const ADDRESS_API_URL = import.meta.env.VITE_BACKEND_URL + "/addresses";

export const addressService = {
    getAllAddresses: async () => {
        const res = await axiosInstance.get<IAddress[]>(`${ADDRESS_API_URL}/`);
        return res.data;
    },

    addAddress: async (address: IAddress) => {
        const res = await axiosInstance.post<IAddress>(
            `${ADDRESS_API_URL}/`,
            address
        );
        return res.data;
    },

    updateAddress: async (address: IAddress) => {
        const res = await axiosInstance.put<IAddress>(
            `${ADDRESS_API_URL}/${address._id}`,
            address
        );
        return res.data;
    },

    deleteAddress: async (id: string) => {
        const res = await axiosInstance.delete<IAddress>(
            `${ADDRESS_API_URL}/${id}`
        );
        return res.data;
    },
};
