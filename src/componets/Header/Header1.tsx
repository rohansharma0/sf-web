import { HeaderContainer, NavBarContainer } from "./Header.style";
import { Link } from "react-router";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { useAuth } from "../../context/AuthContex";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PreferenceConstant } from "../../utils/PreferenceConstant";
import { usePreference } from "../../context/PreferenceContext";
import UserDropdown from "./UserDropdown";

const MotionHeaderContainer = motion(HeaderContainer);

const Header = () => {
    const { isAuthenticated } = useAuth();
    // const queryClient = useQueryClient();
    // const navigate = useNavigate();

    const { getValueByKey } = usePreference();
    const logoURL = getValueByKey(PreferenceConstant.APP_LOGO);
    // const isSaleLive = getValueByKey(PreferenceConstant.IS_SALE_LIVE);
    // const isNewArrivals = getValueByKey(PreferenceConstant.IS_NEW_ARRIVALS);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentScrollY, setCurrentScrollY] = useState(0);
    const [isFurnitureMenuOpen, setIsFurnitureMenuOpen] = useState(false);
    // const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // const { data: categories } = useQuery<ICategory[]>({
    //     queryKey: ["categories"],
    //     queryFn: () => categoryService.getAllCategories(),
    // });

    // const handleLogout = () => {
    //     logout();
    //     setIsDropdownOpen(false);
    //     queryClient.removeQueries({ queryKey: ["wishlist"] });
    //     navigate("/");
    // };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (Math.abs(window.scrollY - currentScrollY) > 50) {
                setIsDropdownOpen(false);
            }
            setCurrentScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <MotionHeaderContainer
            animate={{
                height: currentScrollY < 100 ? "10vh" : "7vh",
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}>
            <AnimatePresence>
                {isFurnitureMenuOpen && (
                    <motion.div
                        className="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsFurnitureMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
            <NavBarContainer>
                <div className="nav-wrapper">
                    {/* <ul className="nav-items-ul">
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
                                                    setHoveredCategory(
                                                        cat._id.toString()
                                                    )
                                                }
                                                onMouseLeave={() =>
                                                    setHoveredCategory(null)
                                                }>
                                                <Link
                                                    to={`products/c/${cat._id}`}>
                                                    {cat.title}
                                                    {cat.subCategories &&
                                                        cat.subCategories
                                                            .length > 0 && (
                                                            <ArrowForwardIosIcon
                                                                sx={{
                                                                    fontSize:
                                                                        "0.7rem",
                                                                }}
                                                            />
                                                        )}
                                                </Link>
                                                <AnimatePresence>
                                                    {hoveredCategory ===
                                                        cat._id.toString() &&
                                                        cat.subCategories
                                                            ?.length > 0 && (
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
                                                                            key={
                                                                                sCat._id
                                                                            }
                                                                            to={`products/s/${sCat._id}`}
                                                                            className="dropdown-sub-cat">
                                                                            {
                                                                                sCat.title
                                                                            }
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
                    </ul> */}
                    <div className="nav-logo">
                        <div
                            className="menu-btn"
                            onClick={() => setIsMenuOpen(!setIsMenuOpen)}>
                            <motion.span
                                className="menu-line"
                                animate={{
                                    rotate: isMenuOpen ? 45 : 0,
                                    y: isMenuOpen ? 9 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="menu-line"
                                animate={{
                                    opacity: isMenuOpen ? 0 : 1,
                                }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                className="menu-line"
                                animate={{
                                    rotate: isMenuOpen ? -45 : 0,
                                    y: isMenuOpen ? -5 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <Link to="/">
                            <motion.img
                                className="nav-logo-img"
                                src={logoURL}
                                alt="Logo"
                                initial={{
                                    height: "32px",
                                }}
                                animate={{
                                    height:
                                        currentScrollY < 100 ? "32px" : "25px",
                                }}
                                transition={{
                                    duration: 0.1,
                                    ease: "easeInOut",
                                }}
                            />
                        </Link>
                    </div>
                    <div className="nav-icons">
                        <Link to="/">
                            <motion.button
                                className="icon-btn"
                                aria-label="Search"
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}>
                                <SearchOutlinedIcon />
                            </motion.button>
                        </Link>
                        {!isAuthenticated ? (
                            <Link
                                to="/auth/login"
                                onClick={() => setIsDropdownOpen(false)}>
                                <motion.button
                                    className="icon-btn"
                                    aria-label="Profile"
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.05 }}>
                                    <AccountCircleOutlinedIcon />
                                </motion.button>
                            </Link>
                        ) : (
                            <UserDropdown
                                isOpen={isDropdownOpen}
                                toggle={() =>
                                    setIsDropdownOpen((prev) => !prev)
                                }
                            />
                        )}
                        <Link to="/cart">
                            <motion.button
                                className="icon-btn"
                                aria-label="Cart"
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}>
                                <ShoppingCartOutlinedIcon />
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </NavBarContainer>
        </MotionHeaderContainer>
    );
};

export default Header;
