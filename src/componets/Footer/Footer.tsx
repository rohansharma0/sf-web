import {
    FooterContainer,
    FooterContent,
    FooterItem,
    FooterTitle,
    FooterContentInner,
    FooterList,
    FooterListItem,
    SocialIcons,
    FooterWrapper,
    FooterBottom,
    FooterRights,
    FooterPayment,
    FooterTitleText,
} from "./Footer.style";

import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import XIcon from "@mui/icons-material/X";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

import { Link } from "react-router";
import { PreferenceConstant } from "../../utils/PreferenceConstant";
import { usePreference } from "../../context/PreferenceContext";
import { useEffect, useState } from "react";

const Footer = () => {
    const { getValueByKey, getByGroupId } = usePreference();

    const logoURL = getValueByKey(PreferenceConstant.APP_LOGO);
    const instagramUrl = getValueByKey(PreferenceConstant.INSTAGRAM_URL);
    const facebookUrl = getValueByKey(PreferenceConstant.FACEBOOK_URL);
    const pinterestUrl = getValueByKey(PreferenceConstant.PINTEREST_URL);
    const twitterUrl = getValueByKey(PreferenceConstant.TWITTER_URL);
    const footerCopyrightText = getValueByKey(
        PreferenceConstant.FOOTER_COPYRIGHT_TEXT
    );

    const popularCategories =
        getByGroupId(PreferenceConstant.POPULAR_CATEGORIES) || [];
    const paymentLogos = getByGroupId(PreferenceConstant.PAYMENT_LOGOS) || [];

    const [openSections, setOpenSections] = useState<Record<string, boolean>>(
        {}
    );

    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const FooterSection = ({
        id,
        title,
        children,
    }: {
        id: string;
        title: string;
        children: React.ReactNode;
    }) => {
        const isOpenMobile = openSections[id];

        const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

        useEffect(() => {
            const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        const isOpen = isDesktop || isOpenMobile;
        return (
            <FooterItem>
                <FooterTitle
                    aria-expanded={isOpenMobile}
                    aria-controls={`section-${id}`}
                    onClick={() => !isDesktop && toggleSection(id)}>
                    {title}
                    <span>{isOpenMobile ? "-" : "+"}</span>
                </FooterTitle>
                <FooterContentInner id={`section-${id}`} $isOpen={isOpen}>
                    {children}
                </FooterContentInner>
            </FooterItem>
        );
    };

    const PopularCategoriesFooterItem = () => (
        <FooterSection id="POPULAR" title="Popular category">
            <FooterList>
                {popularCategories.map((c) => (
                    <FooterListItem key={c.key}>
                        <Link to={`/products/c/${c.key}`}>{c.value}</Link>
                    </FooterListItem>
                ))}
            </FooterList>
        </FooterSection>
    );

    const ShopInfoFooterItem = () => (
        <FooterSection id="SHOP" title="Shop info">
            <FooterList>
                <FooterListItem>
                    <Link to="/contact">Contact</Link>
                </FooterListItem>
                <FooterListItem>
                    <Link to="/faq">FAQ</Link>
                </FooterListItem>
                <FooterListItem>
                    <Link to="/about">About us</Link>
                </FooterListItem>
            </FooterList>
        </FooterSection>
    );

    const SupportFooterItem = () => (
        <FooterSection id="SUPPORT" title="Information">
            <FooterList>
                <FooterListItem>
                    <Link to="/shipping">Shipping</Link>
                </FooterListItem>
                <FooterListItem>
                    <Link to="/policy">Refunds & Returns</Link>
                </FooterListItem>
            </FooterList>
        </FooterSection>
    );

    const FollowFooterItem = () => (
        <FooterItem>
            <FooterTitleText>Follow us</FooterTitleText>
            <SocialIcons>
                <a href={instagramUrl}>
                    <InstagramIcon fontSize="small" />
                </a>
                <a href={pinterestUrl}>
                    <PinterestIcon fontSize="small" />
                </a>
                <a href={twitterUrl}>
                    <XIcon fontSize="small" />
                </a>
                <a href={facebookUrl}>
                    <FacebookRoundedIcon fontSize="small" />
                </a>
            </SocialIcons>
        </FooterItem>
    );

    const FooterBottomSection = () => (
        <FooterWrapper>
            <FooterBottom>
                <FooterRights>
                    <img src={logoURL} alt="Logo" height="15" />
                    <p>{footerCopyrightText}</p>
                </FooterRights>
                <FooterPayment>
                    {paymentLogos.map((logo) => (
                        <div className="payment-logo" key={logo.key}>
                            <img
                                className="payment-img"
                                src={logo.value}
                                alt={`Payment Logo ${logo.key}`}
                            />
                        </div>
                    ))}
                </FooterPayment>
            </FooterBottom>
        </FooterWrapper>
    );

    return (
        <FooterContainer>
            <FooterContent>
                <PopularCategoriesFooterItem />
                <ShopInfoFooterItem />
                <SupportFooterItem />
                <FollowFooterItem />
            </FooterContent>
            <FooterBottomSection />
        </FooterContainer>
    );
};

export default Footer;
