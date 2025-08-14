import { FooterContainer } from "./Footer.style";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import XIcon from "@mui/icons-material/X";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Link } from "react-router";
import { useSystemPreferences } from "../../context/SystemPreferenceContex";
import { SysPrefConstant } from "../../utils/SysPrefConstant";

const Footer = () => {
    const { getValueByKey, getByGroupId } = useSystemPreferences();

    const logoURL = getValueByKey(SysPrefConstant.APP_LOGO);
    const instagramUrl = getValueByKey(SysPrefConstant.INSTAGRAM_URL);
    const facebookUrl = getValueByKey(SysPrefConstant.FACEBOOK_URL);
    const pinterestUrl = getValueByKey(SysPrefConstant.PINTEREST_URL);
    const twitterUrl = getValueByKey(SysPrefConstant.TWITTER_URL);
    const footerCopyrightText = getValueByKey(
        SysPrefConstant.FOOTER_COPYRIGHT_TEXT
    );
    const popularCategories = getByGroupId(SysPrefConstant.POPULAR_CATEGORIES);
    const paymentLogos = getByGroupId(SysPrefConstant.PAYMENT_LOGOS);

    return (
        <FooterContainer>
            <div className="footer-content">
                <div className="footer-item">
                    <h4 className="footer-item-title">Popular</h4>
                    <ul className="footer-item-ul">
                        {popularCategories.map((category) => {
                            return (
                                <li
                                    className="footer-item-li"
                                    key={category.key}>
                                    <Link to={`/products/c/${category.key}`}>
                                        {category.value}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="footer-item">
                    <h4 className="footer-item-title">Shop info</h4>
                    <ul className="footer-item-ul">
                        <li className="footer-item-li">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="footer-item-li">
                            <Link to="/about">About us</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4 className="footer-item-title">Support</h4>
                    <ul className="footer-item-ul">
                        <li className="footer-item-li">
                            <Link to="/shipping">Shipping</Link>
                        </li>
                        <li className="footer-item-li">
                            <Link to="/policy">Refunds & Returns</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4 className="footer-item-title">Follow</h4>
                    <div className="footer-item-social">
                        <a
                            href={instagramUrl}
                            className="footer-item-social-icon">
                            <InstagramIcon fontSize="small" />
                        </a>
                        <a
                            href={pinterestUrl}
                            className="footer-item-social-icon">
                            <PinterestIcon fontSize="small" />
                        </a>
                        <a
                            href={twitterUrl}
                            className="footer-item-social-icon">
                            <XIcon fontSize="small" />
                        </a>
                        <a
                            href={facebookUrl}
                            className="footer-item-social-icon">
                            <FacebookRoundedIcon fontSize="small" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-wrapper">
                <div className="footer-container">
                    <div className="footer-rights-container">
                        <Link to="/">
                            <img src={logoURL} alt="Logo" height="15" />
                        </Link>
                        <p className="footer-rights">{footerCopyrightText}</p>
                    </div>
                    <div className="footer-payment">
                        {paymentLogos.map((paymentLogo) => {
                            return (
                                <div className="payment-logo">
                                    <img
                                        className="payment-img"
                                        src={paymentLogo.value}
                                        alt={paymentLogo.key}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
};

export default Footer;
