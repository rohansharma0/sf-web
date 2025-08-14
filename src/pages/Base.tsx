import Header from "../componets/Header/Header";
import Footer from "../componets/Footer/Footer";
import { Outlet } from "react-router";
import { BaseContainer } from "../componets/style/Base.style";

const Base = () => {
    return (
        <BaseContainer>
            <Header />
            <Outlet />
            <Footer />
        </BaseContainer>
    );
};

export default Base;
