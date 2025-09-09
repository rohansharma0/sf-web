import { createContext, useContext, useEffect, useState } from "react";
import type { IPreference } from "../types/Preference";
import { preferenceService } from "../services/preferenceService";

interface ContextType {
    preferences: IPreference[];
    getByGroupId: (groupId: string) => IPreference[];
    getValueByKey: (key: string) => string | undefined;
}

const PreferenceContext = createContext<ContextType | undefined>(undefined);

export const PreferenceProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [preferences, setPreferences] = useState<IPreference[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const data = await preferenceService.getAll();
                setPreferences(data);
            } catch (err) {
                console.error("Failed to load preferences", err);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const getValueByKey = (key: string) =>
        preferences.find((pref) => pref.key === key)?.value;

    const getByGroupId = (groupId: string) =>
        preferences.filter((pref) => pref.groupId === groupId);

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
        <PreferenceContext.Provider
            value={{ preferences, getValueByKey, getByGroupId }}>
            {children}
        </PreferenceContext.Provider>
    );
};

export const usePreference = () => {
    const context = useContext(PreferenceContext);
    if (!context)
        throw new Error("usePreference must be used within PreferenceProvider");
    return context;
};
