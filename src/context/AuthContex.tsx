import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";
import type { AuthContextType } from "../types/auth/AuthContextType";
import type { AuthResponse } from "../types/auth/AuthResponse";
import { authService } from "../services/authServices";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        authService.isAuthenticated()
    );
    const [token, setToken] = useState<string | null>(authService.getToken());

    const login = (data: AuthResponse) => {
        authService.saveSession(data.token);
        setToken(data.token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        authService.logout();
        setToken(null);
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const storedToken = authService.getToken();
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used inside AuthProvider");
    return context;
};
