import { AuthProvider } from "./context/AuthContex";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes/Router";
import { SystemPreferenceProvider } from "./context/SystemPreferenceContex";

export const App = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <SystemPreferenceProvider>
                <AuthProvider>
                    <Router />
                </AuthProvider>
            </SystemPreferenceProvider>
        </QueryClientProvider>
    );
};
