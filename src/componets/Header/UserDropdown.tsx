import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { useRef } from "react";
import { useAuth } from "../../context/AuthContex";
import { useQueryClient } from "@tanstack/react-query";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

interface UserDropdownProps {
    isOpen: boolean;
    toggle: () => void;
}

const UserDropdown = ({ isOpen, toggle }: UserDropdownProps) => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        logout();
        toggle();
        queryClient.removeQueries({ queryKey: ["wishlist"] });
        navigate("/");
    };
    return (
        <div className="dropdown-container" ref={dropdownRef}>
            <motion.button
                className="icon-btn"
                aria-label="Profile"
                onClick={toggle}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}>
                <AccountCircleOutlinedIcon />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}>
                        <Link
                            className="dropdown-item"
                            onClick={toggle}
                            to="/profile">
                            <PersonOutlinedIcon fontSize="small" />
                            Profile
                        </Link>
                        <Link
                            className="dropdown-item"
                            onClick={toggle}
                            to="/orders">
                            <Inventory2OutlinedIcon fontSize="small" />
                            Orders
                        </Link>
                        <Link
                            className="dropdown-item"
                            onClick={toggle}
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
    );
};

export default UserDropdown;
