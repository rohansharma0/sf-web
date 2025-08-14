import { NavbarContainer } from "./Navbar1.style";
import logo from "../../assets/logo.svg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContex";
import { useEffect, useRef, useState } from "react";
import { useSystemPreferences } from "../../context/SystemPreferenceContex";
import { SysPrefConstant } from "../../utils/SysPrefConstant";
import { useQueryClient } from "@tanstack/react-query";

const Navbar = ({
    isMenuOpen,
    onMenuOpen,
    showMenuIcon,
}: {
    isMenuOpen: boolean;
    onMenuOpen: () => void;
    showMenuIcon: boolean;
}) => {
    const { getValueByKey } = useSystemPreferences();
    const searchPlaceholderText = getValueByKey(
        SysPrefConstant.SEARCH_PLACEHOLDER_TEXT
    );

    const { logout, isAuthenticated } = useAuth();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        logout();
        setIsDropdownOpen(false);
        queryClient.removeQueries({ queryKey: ["wishlist"] });
        navigate("/");
    };

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

    return (
        <NavbarContainer>
            <div className="navbar-logo">
                <div className="logo-container">
                    {showMenuIcon && (
                        <div className="menu-btn" onClick={onMenuOpen}>
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
                    )}
                    <Link to="/">
                        <img src={logo} alt="Logo" height="32" />
                    </Link>
                </div>
            </div>

            <div className="navbar-search">
                <input type="text" placeholder={searchPlaceholderText} />
                <SearchOutlinedIcon className="search-icon" />
            </div>
            <div className="navbar-icons">
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
                    <div className="dropdown-container" ref={dropdownRef}>
                        <motion.button
                            className="icon-btn"
                            aria-label="Profile"
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}>
                            <AccountCircleOutlinedIcon />
                        </motion.button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    className="dropdown-menu"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}>
                                    <Link
                                        className="dropdown-item"
                                        onClick={() => setIsDropdownOpen(false)}
                                        to="/profile">
                                        <PersonOutlinedIcon fontSize="small" />
                                        Profile
                                    </Link>
                                    <Link
                                        className="dropdown-item"
                                        onClick={() => setIsDropdownOpen(false)}
                                        to="/orders">
                                        <Inventory2OutlinedIcon fontSize="small" />
                                        Orders
                                    </Link>
                                    <Link
                                        className="dropdown-item"
                                        onClick={() => setIsDropdownOpen(false)}
                                        to="/wishlist">
                                        <FavoriteBorderOutlinedIcon fontSize="small" />
                                        Wishlist
                                    </Link>
                                    <button
                                        className="dropdown-item"
                                        onClick={handleLogout}>
                                        <LogoutOutlinedIcon fontSize="small" />
                                        Logout
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
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
        </NavbarContainer>
    );
};

export default Navbar;
