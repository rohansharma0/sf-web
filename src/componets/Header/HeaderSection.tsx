import { motion } from "framer-motion";
import { HeaderContainer, NavBarContainer } from "./Header.style";
import type { ReactNode } from "react";

export const MotionHeaderContainer = motion(HeaderContainer);

const HeaderSection = ({ children }: { children: ReactNode }) => {
    return (
        <MotionHeaderContainer>
            <NavBarContainer>{children}</NavBarContainer>
        </MotionHeaderContainer>
    );
};

export default HeaderSection;
