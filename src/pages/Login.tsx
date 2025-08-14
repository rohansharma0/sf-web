import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import Auth from "../componets/Auth/Auth";
import { authService } from "../services/authServices";
import { useAuth } from "../context/AuthContex";
import { useWishlist } from "../hooks/useWishlist";

type LoginFormInputs = {
    email: string;
    password: string;
};

const Login = () => {
    const { login } = useAuth();
    const { toggleWishlist } = useWishlist();
    const navigate = useNavigate();
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const from = params.get("from") || "/";
    const action = params.get("action");
    const productId = params.get("productId");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LoginFormInputs>({ mode: "onChange" });

    const onSubmit = async (data: LoginFormInputs) => {
        if (Object.keys(errors).length > 0) return;
        try {
            const res = await authService.login(data.email, data.password);
            if (res && res.token) {
                login(res);
                console.log(action, productId);

                if (action === "wishlist" && productId) {
                    toggleWishlist(productId);
                }
                if (action === "cart" && productId) {
                    console.log("Add to Cart:", productId);
                }

                console.log(from);

                navigate(from, { replace: true });
            }
        } catch (err) {
            console.error("Login failed:", err);
        } finally {
            reset();
        }
    };

    return (
        <Auth>
            <h2 className="auth-title">Login.</h2>
            <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="auth-form-group">
                    <input
                        className="auth-form-input"
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required.",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address.",
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="auth-form-error">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="auth-form-group">
                    <input
                        className="auth-form-input"
                        type="password"
                        placeholder="Password"
                        {...register("password", {
                            required: "Password is required.",
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/,
                                message:
                                    "Password must contain at least one letter and one number.",
                            },
                        })}
                    />
                    {errors.password && (
                        <p className="auth-form-error">
                            {errors.password.message}
                        </p>
                    )}
                    <Link to="/auth/forgot" className="auth-form-forget">
                        Forgot your password?
                    </Link>
                </div>

                <button type="submit" className="auth-form-button">
                    Sign in
                </button>
            </form>
            <Link className="auth-form-outline-button" to="/auth/register">
                Don't have an account yet? Create account
            </Link>
        </Auth>
    );
};

export default Login;
