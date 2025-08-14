import { useForm } from "react-hook-form";
import Auth from "../componets/Auth/Auth";
import { useNavigate } from "react-router";

type ForgotPasswordInputs = {
    email: string;
};

const ForgotPassword = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordInputs>();

    const onSubmit = (data: ForgotPasswordInputs) => {
        console.log("Recover password for:", data);
        // Call backend API to send recovery email
    };

    return (
        <Auth>
            <h2 className="auth-title">Reset your password!</h2>
            <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="auth-form-group">
                    <input
                        className="auth-form-input"
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address",
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="auth-form-error">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <button type="submit" className="auth-form-button">
                    Send recovery email
                </button>
            </form>
            <div className="auth-btn-group">
                <button
                    className="auth-form-outline-button"
                    onClick={() => navigate(-1)}>
                    Login
                </button>
                <button
                    className="auth-form-outline-button"
                    onClick={() => navigate(-2)}>
                    Go to Home
                </button>
            </div>
        </Auth>
    );
};

export default ForgotPassword;
