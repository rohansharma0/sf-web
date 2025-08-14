import type { APIResponse } from "../types/APIResponse";
import type { AuthResponse } from "../types/auth/AuthResponse";
import type { IUser } from "../types/User";

import axios from "axios";
import { axiosInstance } from "../utils/axiosInstance";

const AUTH_API_URL = import.meta.env.VITE_BACKEND_URL + "/auth";

export const authService = {
    login: async (email: string, password: string): Promise<AuthResponse> => {
        const res = await axios.post<APIResponse<AuthResponse>>(
            `${AUTH_API_URL}/login`,
            { email, password }
        );
        return res.data.data;
    },

    register: async (
        name: string,
        email: string,
        password: string
    ): Promise<AuthResponse> => {
        const user = {
            name,
            email,
            password,
        };
        const res = await axios.post<APIResponse<AuthResponse>>(
            `${AUTH_API_URL}/register`,
            user
        );
        return res.data.data;
    },

    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    },

    saveSession: (token: string) => {
        localStorage.setItem("token", token);
    },

    getToken: (): string | null => localStorage.getItem("token"),

    isAuthenticated: (): boolean => !!localStorage.getItem("token"),

    updateUser: (name: string, email: string) => {
        const res = axiosInstance.put<APIResponse<IUser>>(`${AUTH_API_URL}/`, {
            name,
            email,
        });
        return res;
    },
};
