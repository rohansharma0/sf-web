import { AuthProvider } from "./context/AuthContex";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes/Router";
import { PreferenceProvider } from "./context/PreferenceContext";
import { ThemeProvider } from "./context/ThemeContext";

export const App = () => {
    const queryClient = new QueryClient();
    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <PreferenceProvider>
                    <AuthProvider>
                        <Router />
                    </AuthProvider>
                </PreferenceProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
};
