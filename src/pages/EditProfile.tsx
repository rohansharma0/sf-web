import { useNavigate } from "react-router";
import {
    EditProfileContainer,
    EditProfileDescription,
    EditProfileForm,
    EditProfileHeader,
} from "../componets/style/EditProfile.style";

import { useForm } from "react-hook-form";
import { userService } from "../services/userService";
import { useQuery } from "@tanstack/react-query";
import type { IUser } from "../types/User";
import GoBackNav from "../componets/GoBackNav/GoBackNav";

type UpdateFormInputs = {
    name: string;
    email: string;
};

const EditProfile = () => {
    const navigate = useNavigate();

    const { data: user } = useQuery<IUser>({
        queryKey: ["user"],
        queryFn: () => userService.getUser(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<UpdateFormInputs>({
        mode: "onChange",
        defaultValues: user ? user : {},
    });

    const onSubmit = async (data: UpdateFormInputs) => {
        if (Object.keys(errors).length > 0) return;
        try {
            await userService.updateUser(data.name, data.email);
            navigate(-2);
        } catch (err) {
            console.error(err);
        } finally {
            reset(data);
        }
    };

    return (
        <EditProfileContainer>
            <GoBackNav text="Back to account" onBack={() => navigate(-1)} />
            <EditProfileHeader>My Details</EditProfileHeader>

            <EditProfileForm onSubmit={handleSubmit(onSubmit)}>
                <EditProfileDescription>
                    Update your personal information to keep your profile up to
                    date.
                </EditProfileDescription>
                <div className="edit-profile-input-group">
                    <input
                        className="edit-profile-input"
                        type="text"
                        placeholder="Name"
                        {...register("name", {
                            required: "Name is required.",
                        })}
                    />
                    {errors.name && (
                        <p className="edit-profile-error">
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <div className="edit-profile-input-group">
                    <input
                        className="edit-profile-input"
                        type="text"
                        disabled={true}
                        placeholder="Email"
                        {...register("email")}
                    />
                </div>
                <button type="submit" className="edit-profile-button">
                    Update
                </button>
            </EditProfileForm>
        </EditProfileContainer>
    );
};

export default EditProfile;
