import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { IAddress } from "../../types/Address";
import { AddressFormGroup } from "./AddressForm.style";

const AddressForm = ({
    register,
    errors,
}: {
    register: UseFormRegister<IAddress>;
    errors: FieldErrors<IAddress>;
}) => {
    return (
        <>
            <AddressFormGroup>
                <input
                    className="address-form-input"
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", {
                        required: "First name is required.",
                    })}
                />
                {errors.firstName && (
                    <p className="address-form-error">
                        {errors.firstName.message}
                    </p>
                )}
            </AddressFormGroup>

            <AddressFormGroup>
                <input
                    className="address-form-input"
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName")}
                />
            </AddressFormGroup>

            <AddressFormGroup>
                <input
                    className="address-form-input"
                    type="text"
                    placeholder="Country"
                    {...register("country", {
                        required: "Country is required.",
                    })}
                />
                {errors.country && (
                    <p className="address-form-error">
                        {errors.country.message}
                    </p>
                )}
            </AddressFormGroup>

            <AddressFormGroup>
                <input
                    className="address-form-input"
                    type="text"
                    placeholder="State"
                    {...register("state", {
                        required: "State is required.",
                    })}
                />
                {errors.state && (
                    <p className="address-form-error">{errors.state.message}</p>
                )}
            </AddressFormGroup>

            <AddressFormGroup>
                <input
                    className="address-form-input"
                    type="text"
                    placeholder="Address Line 1"
                    {...register("address1", {
                        required: "Address Line 1 is required.",
                    })}
                />
                {errors.address1 && (
                    <p className="address-form-error">
                        {errors.address1.message}
                    </p>
                )}
            </AddressFormGroup>

            <AddressFormGroup>
                <input
                    className="address-form-input"
                    type="text"
                    placeholder="Address Line 2"
                    {...register("address2")}
                />
            </AddressFormGroup>

            <AddressFormGroup>
                <input
                    className="address-form-input"
                    type="text"
                    placeholder="City"
                    {...register("city", {
                        required: "City is required.",
                    })}
                />
                {errors.city && (
                    <p className="address-form-error">{errors.city.message}</p>
                )}
            </AddressFormGroup>

            <AddressFormGroup>
                <input
                    className="address-form-input"
                    type="text"
                    placeholder="Zip Code"
                    {...register("zip", {
                        required: "Zip code is required.",
                    })}
                />
                {errors.zip && (
                    <p className="address-form-error">{errors.zip.message}</p>
                )}
            </AddressFormGroup>

            <AddressFormGroup>
                <input
                    className="address-form-input"
                    type="text"
                    placeholder="Phone Number"
                    {...register("phoneNumber", {
                        required: "Phone number is required.",
                    })}
                />
                {errors.phoneNumber && (
                    <p className="address-form-error">
                        {errors.phoneNumber.message}
                    </p>
                )}
            </AddressFormGroup>

            <AddressFormGroup
                style={{
                    display: "flex",
                    gap: "8px",
                    flexDirection: "row",
                }}>
                <input type="checkbox" {...register("isPrimary")} />
                <label>Set as Primary Address</label>
            </AddressFormGroup>
        </>
    );
};

export default AddressForm;
