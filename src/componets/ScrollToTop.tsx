import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        if (navigationType === "PUSH") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [pathname, navigationType]);

    return null;
};

export default ScrollToTop;
