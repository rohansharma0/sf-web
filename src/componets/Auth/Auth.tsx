import type React from "react";
import { AuthContainer, AuthSection } from "./Auth.style";

const Auth = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthContainer>
            <AuthSection>{children}</AuthSection>
        </AuthContainer>
    );
};

export default Auth;
