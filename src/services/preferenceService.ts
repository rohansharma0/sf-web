import axios from "axios";
import type { IPreference } from "../types/Preference";

const PREFERENCE_API_URL = import.meta.env.VITE_BACKEND_URL + "/preferences";

export const preferenceService = {
    getAll: async () => {
        const res = await axios.get<IPreference[]>(PREFERENCE_API_URL);
        return res.data;
    },
    getByKey: async (key: string) => {
        const res = await axios.get(`${PREFERENCE_API_URL}/key/${key}`);
        return res.data;
    },
    getByGroupId: async (groupId: string) => {
        const res = await axios.get(`${PREFERENCE_API_URL}/group/${groupId}`);
        return res.data;
    },
};
