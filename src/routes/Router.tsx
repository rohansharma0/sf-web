import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthRoute from "./AuthRoute";
import ForgotPassword from "../pages/ForgotPassword";
import Cart from "../pages/Cart";
import SubCategory from "../pages/SubCategory";
import Category from "../pages/Category";
import ProtectedRoute from "./ProtectedRoute";
import Base from "../pages/Base";
import Profile from "../pages/Profile";
import Orders from "../pages/Orders";
import Wishlist from "../pages/Wishlist";
import EditProfile from "../pages/EditProfile";
import ManageAddress from "../pages/ManageAddress";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Shipping from "../pages/Shipping";
import RefundAndReturn from "../pages/RefundAndReturn";
import ScrollToTop from "../componets/ScrollToTop";

const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<Base />}>
                    <Route path="/" element={<Home />} />
                    <Route path="products/c/:id" element={<Category />} />
                    <Route path="products/s/:id" element={<SubCategory />} />
                    <Route path="product/:id" element={<Product />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="shipping" element={<Shipping />} />
                    <Route path="policy" element={<RefundAndReturn />} />
                    <Route path="auth" element={<AuthRoute />}>
                        <Route
                            index
                            element={<Navigate to="login" replace />}
                        />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="forgot" element={<ForgotPassword />} />
                    </Route>
                    <Route element={<ProtectedRoute />}>
                        <Route path="cart" element={<Cart />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="wishlist" element={<Wishlist />} />
                        <Route path="profile/edit" element={<EditProfile />} />
                        <Route
                            path="profile/address"
                            element={<ManageAddress />}
                        />
                    </Route>
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
