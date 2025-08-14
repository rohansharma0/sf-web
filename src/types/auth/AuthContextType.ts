import type { AuthResponse } from "../auth/AuthResponse";

export interface AuthContextType {
    isAuthenticated: boolean;
    token: string | null;
    login: (data: AuthResponse) => void;
    logout: () => void;
}
