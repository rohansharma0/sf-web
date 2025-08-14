import { HeaderContainer, SubcategoryMenu } from "./Header1.style";
import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../../services/category.services";
import type { ICategory } from "../../types/Category";
import Navbar from "../Navbar/Navbar1";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Header = () => {
    const { data: categories } = useQuery<ICategory[]>({
        queryKey: ["categories"],
        queryFn: () => categoryService.getAllCategories(),
    });

    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [showMenuIcon, setShowMenuIcon] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // console.log(currentScrollY);

            //scroll down
            // if (currentScrollY > lastScrollY) {
            //     setIsMenuOpen(false);
            //     setShowMenuIcon(true);
            // } else {
            //     setIsMenuOpen(true);
            //     setShowMenuIcon(false);
            // }

            // if (currentScrollY < 100) {
            //     setIsMenuOpen(true);
            //     setShowMenuIcon(false);
            // } else {
            //     if (currentScrollY > lastScrollY) {
            //         if (currentScrollY < 150) {
            //             setIsMenuOpen(false);
            //             setShowMenuIcon(true);
            //         } else if (currentScrollY < 200) {
            //         }
            //     } else {
            //         setIsMenuOpen(false);
            //         setShowMenuIcon(true);
            //     }
            // }

            lastScrollY = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <HeaderContainer>
            <Navbar
                isMenuOpen={isMenuOpen}
                onMenuOpen={() => setIsMenuOpen((prev) => !prev)}
                showMenuIcon={showMenuIcon}
            />
            {isMenuOpen && (
                <ul className="navbar-categories-list">
                    {categories?.map((category) => (
                        <li
                            className="navbar-category-item"
                            key={category._id}
                            onMouseEnter={() => setActiveCategory(category._id)}
                            onMouseLeave={() => setActiveCategory(null)}>
                            <Link
                                to={`products/c/${category._id}`}
                                onClick={() => setActiveCategory(null)}
                                className="navbar-category-link">
                                {category.title}
                            </Link>

                            <AnimatePresence>
                                {activeCategory === category._id &&
                                    category.subCategories?.length > 0 && (
                                        <SubcategoryMenu
                                            as={motion.div}
                                            initial={{
                                                opacity: 0,
                                            }}
                                            animate={{
                                                opacity: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.1,
                                            }}>
                                            {category.subCategories.map(
                                                (sub) => (
                                                    <Link
                                                        to={`products/s/${sub._id}`}
                                                        onClick={() =>
                                                            setActiveCategory(
                                                                null
                                                            )
                                                        }
                                                        key={sub._id}
                                                        className="subcategory-item">
                                                        <img
                                                            className="subcategory-image"
                                                            src={sub.image}
                                                            alt={sub.title}
                                                        />
                                                        <p className="subcategory-title">
                                                            {sub.title}
                                                        </p>
                                                    </Link>
                                                )
                                            )}
                                        </SubcategoryMenu>
                                    )}
                            </AnimatePresence>
                        </li>
                    ))}
                </ul>
            )}
        </HeaderContainer>
    );
};

export default Header;
