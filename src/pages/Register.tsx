import { useForm } from "react-hook-form";
import Auth from "../componets/Auth/Auth";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContex";
import { authService } from "../services/authServices";

type RegisterFormInputs = {
    name: string;
    email: string;
    password: string;
};

const Register = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<RegisterFormInputs>({ mode: "onChange" });

    const onSubmit = async (data: RegisterFormInputs) => {
        if (Object.keys(errors).length > 0) return;
        try {
            const res = await authService.register(
                data.name,
                data.email,
                data.password
            );
            if (res && res.token) {
                login(res);
                navigate(-2);
            }
        } catch (err) {
            console.error("Registration failed:", err);
        } finally {
            reset();
        }
    };

    return (
        <Auth>
            <h2 className="auth-title">Don't have an account yet?</h2>
            <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="auth-form-group">
                    <input
                        className="auth-form-input"
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                        <p className="auth-form-error">{errors.name.message}</p>
                    )}
                </div>
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
                </div>
                <button type="submit" className="auth-form-button">
                    Create account
                </button>
            </form>
            <button
                className="auth-form-outline-button"
                onClick={() => navigate(-1)}>
                Already have an account? Sign in
            </button>
        </Auth>
    );
};

export default Register;
