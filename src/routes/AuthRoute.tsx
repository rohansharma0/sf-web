import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContex";

const AuthRoute = () => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default AuthRoute;
