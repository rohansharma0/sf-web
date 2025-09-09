import { Link } from "react-router";
import { usePreference } from "../../context/PreferenceContext";
import { PreferenceConstant } from "../../utils/PreferenceConstant";
import { MobileMenuContainer } from "./Header.style";

import CloseIcon from "@mui/icons-material/Close";

interface MobileMenuProps {
    closeMenu: () => void;
}

const MobileMenu = ({ closeMenu }: MobileMenuProps) => {
    const { getValueByKey } = usePreference();
    const logoURL = getValueByKey(PreferenceConstant.APP_LOGO);
    return (
        <MobileMenuContainer
            key="mobile-menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}>
            <div className="menu-header">
                <img src={logoURL} alt="Logo" className="logo" />
                <button aria-label="Close menu" onClick={closeMenu}>
                    <CloseIcon />
                </button>
            </div>
            <nav className="menu-items">
                {/* {["/", "/products", "/about", "/contact"].map((path, idx) => (
                    <Link key={idx} to={path} onClick={closeMenu}>
                        {path === "/"
                            ? "Home"
                            : path.slice(1).charAt(0).toUpperCase() +
                              path.slice(2)}
                    </Link>
                ))} */}
                <Link to="/" onClick={closeMenu}>
                    Furniture
                </Link>
            </nav>
        </MobileMenuContainer>
    );
};

export default MobileMenu;
