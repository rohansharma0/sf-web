import { createContext, useContext, useEffect, useState } from "react";
import { systemPreferenceService } from "../services/systemPreferenceService";
import type { ISystemPreference } from "../types/SystemPreference";

interface ContextType {
    preferences: ISystemPreference[];
    getByGroupId: (groupId: string) => ISystemPreference[];
    getValueByKey: (key: string) => string | undefined;
}

const SystemPreferenceContext = createContext<ContextType | undefined>(
    undefined
);

export const SystemPreferenceProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [preferences, setPreferences] = useState<ISystemPreference[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const data = await systemPreferenceService.getAll();
                setPreferences(data);
            } catch (err) {
                console.error("Failed to load system preferences", err);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const getByGroupId = (groupId: string) =>
        preferences.filter((pref) => pref.groupId === groupId);

    const getValueByKey = (key: string) =>
        preferences.find((pref) => pref.key === key)?.value;

    if (loading) {
        return (
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                }}>
                Loading...
            </div>
        );
    }

    return (
        <SystemPreferenceContext.Provider
            value={{ preferences, getByGroupId, getValueByKey }}>
            {children}
        </SystemPreferenceContext.Provider>
    );
};

export const useSystemPreferences = () => {
    const context = useContext(SystemPreferenceContext);
    if (!context)
        throw new Error(
            "useSystemPreferences must be used within SystemPreferenceProvider"
        );
    return context;
};
