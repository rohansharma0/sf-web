import axios from "axios";
import type { ISystemPreference } from "../types/SystemPreference";
import type { APIResponse } from "../types/APIResponse";

const SYSTEM_PREFERENCE_API_URL =
    import.meta.env.VITE_BACKEND_URL + "/system-preferences";

export const systemPreferenceService = {
    getAll: async () => {
        const res = await axios.get<APIResponse<ISystemPreference[]>>(
            `${SYSTEM_PREFERENCE_API_URL}`
        );
        return res.data.data;
    },
    getByGroupId: async (groupId: string) => {
        const res = await axios.get(`/api/system-preferences/${groupId}`);
        return res.data;
    },
    getByKey: async (groupId: string, key: string) => {
        const res = await axios.get(
            `/api/system-preferences/${groupId}/${key}`
        );
        return res.data;
    },
};
