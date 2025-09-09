import { Link } from "react-router";
import { usePreference } from "../../context/PreferenceContext";
import { useState } from "react";
import { PreferenceConstant } from "../../utils/PreferenceConstant";
import { AnimatePresence, motion } from "framer-motion";
import type { ICategory } from "../../types/Category";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { DesktopMenuContainer } from "./Header.style";

const DesktopMenu = ({
    categories,
}: {
    categories: ICategory[] | undefined;
}) => {
    const [isFurnitureMenuOpen, setIsFurnitureMenuOpen] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    const { getValueByKey } = usePreference();
    const isSaleLive = getValueByKey(PreferenceConstant.IS_SALE_LIVE);
    const isNewArrivals = getValueByKey(PreferenceConstant.IS_NEW_ARRIVALS);

    return (
        <DesktopMenuContainer>
            <li
                className="nav-items category-container"
                onMouseEnter={() => setIsFurnitureMenuOpen(true)}
                onMouseLeave={() => {
                    setIsFurnitureMenuOpen(false);
                    setHoveredCategory(null);
                }}>
                <Link to="/products" className="nav-link">
                    Furniture
                </Link>

                <AnimatePresence>
                    {isFurnitureMenuOpen && categories && (
                        <motion.div
                            className="category-dropdown"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.1 }}>
                            {categories.map((cat) => (
                                <div
                                    key={cat._id}
                                    className="dropdown-cat"
                                    onMouseEnter={() =>
                                        setHoveredCategory(cat._id.toString())
                                    }
                                    onMouseLeave={() =>
                                        setHoveredCategory(null)
                                    }>
                                    <Link to={`products/c/${cat._id}`}>
                                        {cat.title}
                                        {cat.subCategories &&
                                            cat.subCategories.length > 0 && (
                                                <ArrowForwardIosIcon
                                                    sx={{
                                                        fontSize: "0.7rem",
                                                    }}
                                                />
                                            )}
                                    </Link>
                                    <AnimatePresence>
                                        {hoveredCategory ===
                                            cat._id.toString() &&
                                            cat.subCategories?.length > 0 && (
                                                <motion.div
                                                    className="subcategory-dropdown"
                                                    initial={{
                                                        opacity: 0,
                                                        y: -10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: -10,
                                                    }}
                                                    transition={{
                                                        duration: 0.1,
                                                    }}>
                                                    {cat.subCategories.map(
                                                        (sCat) => (
                                                            <Link
                                                                key={sCat._id}
                                                                to={`products/s/${sCat._id}`}
                                                                className="dropdown-sub-cat">
                                                                {sCat.title}
                                                            </Link>
                                                        )
                                                    )}
                                                </motion.div>
                                            )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </li>

            {isNewArrivals && isNewArrivals === "1" && (
                <li className="nav-items">
                    <Link to="/products" className="nav-link">
                        New in
                    </Link>
                </li>
            )}

            {isSaleLive && isSaleLive === "1" && (
                <li className="nav-items">
                    <Link to="/products" className="nav-link-sale">
                        Sale
                    </Link>
                </li>
            )}
        </DesktopMenuContainer>
    );
};

export default DesktopMenu;
