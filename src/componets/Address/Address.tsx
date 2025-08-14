import { useEffect, useState } from "react";
import type { IAddress } from "../../types/Address";
import {
    AddressFormContainer,
    AddressItem,
    AddressWrapper,
} from "./Address.style";
import AddressForm from "../EditAddressForm/AddressForm";
import { useForm } from "react-hook-form";

const Address = ({
    address,
    index,
    onEdit,
    onDelete,
}: {
    address: IAddress;
    index?: number;
    onEdit: (data: IAddress) => void;
    onDelete: (id: string) => void;
}) => {
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IAddress>({ mode: "onChange", defaultValues: address });

    useEffect(() => {
        if (isEditFormOpen && address) {
            reset(address);
        }
    }, [isEditFormOpen, address, reset]);

    const handleOnSave = (data: IAddress) => {
        if (Object.keys(errors).length > 0) return;
        onEdit(data);
        setIsEditFormOpen(false);
    };

    return (
        <AddressWrapper key={address._id}>
            <h4 className="address-item-title">
                {address.isPrimary ? "Primary Address" : `Address ${index}`}
            </h4>
            <AddressItem>
                <div className="address-item-content">
                    <p className="address-item-name">
                        {address.firstName} {address.lastName}
                    </p>
                    <p className="address-item-details">
                        {[
                            address.address1,
                            address.address2,
                            address.city,
                            address.state,
                            address.country,
                            address.zip,
                        ]
                            .filter(Boolean)
                            .join(", ")}
                    </p>
                    <p className="address-item-phone">{address.phoneNumber}</p>
                </div>
                <div className="address-item-actions">
                    <a
                        className="address-item-link"
                        onClick={() => setIsEditFormOpen(!isEditFormOpen)}>
                        Edit
                    </a>
                    <a
                        className="address-item-link"
                        onClick={() => onDelete(address._id)}>
                        Delete
                    </a>
                </div>

                {isEditFormOpen && (
                    <AddressFormContainer onSubmit={handleSubmit(handleOnSave)}>
                        <AddressForm register={register} errors={errors} />
                        <div className="address-form-actions">
                            <button
                                type="submit"
                                className="address-form-button">
                                Save
                            </button>
                            <button
                                type="button"
                                className="address-form-outline-button"
                                onClick={() => setIsEditFormOpen(false)}>
                                Cancel
                            </button>
                        </div>
                    </AddressFormContainer>
                )}
            </AddressItem>
        </AddressWrapper>
    );
};

export default Address;
