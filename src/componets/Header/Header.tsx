import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../../services/category.services";
import type { ICategory } from "../../types/Category";

import HeaderSection from "./HeaderSection";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import NavBarActions from "./NavBarActions";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { data: categories } = useQuery<ICategory[]>({
        queryKey: ["categories"],
        queryFn: () => categoryService.getAllCategories(),
    });

    return (
        <HeaderSection>
            <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <DesktopMenu categories={categories} />
            <Logo />
            <NavBarActions />
            <AnimatePresence>
                {isMenuOpen && (
                    <MobileMenu closeMenu={() => setIsMenuOpen(false)} />
                )}
            </AnimatePresence>
        </HeaderSection>
    );
};

export default Header;
