import { Link } from "react-router";
import { usePreference } from "../../context/PreferenceContext";
import { PreferenceConstant } from "../../utils/PreferenceConstant";
import { LogoContainer } from "./Header.style";

const Logo = () => {
    const { getValueByKey } = usePreference();
    const logoURL = getValueByKey(PreferenceConstant.APP_LOGO);

    return (
        <LogoContainer>
            <Link to="/">
                <img src={logoURL} alt="Logo" className="logo" />
            </Link>
        </LogoContainer>
    );
};

export default Logo;
