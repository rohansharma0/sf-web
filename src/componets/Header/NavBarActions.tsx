import { Link, useNavigate } from "react-router";
import {
    SearchOutlined,
    ShoppingCartOutlined,
    AccountCircleOutlined,
} from "@mui/icons-material";
import { useAuth } from "../../context/AuthContex";
import UserDropdown from "./UserDropdown";
import { useState, useRef, useEffect } from "react";
import { NavBarActionsContainer } from "./Header.style";

const NavBarActions = () => {
    const { isAuthenticated } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Close dropdown on outside click
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
        <NavBarActionsContainer ref={dropdownRef}>
            <Link to="/search">
                <SearchOutlined />
            </Link>
            {isAuthenticated ? (
                <UserDropdown
                    isOpen={isDropdownOpen}
                    toggle={() => setIsDropdownOpen(!isDropdownOpen)}
                />
            ) : (
                <Link to="/auth/login">
                    <AccountCircleOutlined />
                </Link>
            )}
            <Link to="/cart">
                <ShoppingCartOutlined />
            </Link>
        </NavBarActionsContainer>
    );
};

export default NavBarActions;
