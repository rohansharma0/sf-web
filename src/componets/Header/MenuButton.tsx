import { MenuButtonStyled } from "./Header.style";

const MenuButton = ({
    isMenuOpen,
    setIsMenuOpen,
}: {
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
}) => {
    return (
        <MenuButtonStyled
            onClick={() => setIsMenuOpen(true)}
            aria-label="menu"
            aria-expanded={isMenuOpen}>
            <span className="line" />
            <span className="line" />
            <span className="line" />
        </MenuButtonStyled>
    );
};

export default MenuButton;
