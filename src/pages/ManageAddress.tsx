import {
    AddAddressForm,
    AddressContainer,
    ManageAddressContainer,
    ManageAddressHeader,
    ManageAddressNav,
} from "../componets/style/ManageAddress.style";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import type { IAddress } from "../types/Address";
import { addressService } from "../services/addressServices";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Address from "../componets/Address/Address";
import { AddressItem } from "../componets/Address/Address.style";
import AddressForm from "../componets/EditAddressForm/AddressForm";
import { useNavigate } from "react-router";

const ManageAddress = () => {
    const navigate = useNavigate();

    const [isAddAddressFormOpen, setIsAddAddressFormOpen] =
        useState<boolean>(false);

    const [addressList, setAddressList] = useState<IAddress[]>([]);
    const [primaryAddress, setPrimaryAddress] = useState<IAddress | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IAddress>({ mode: "onChange" });

    const { data: addresses } = useQuery<IAddress[]>({
        queryKey: ["addresses"],
        queryFn: () => addressService.getAllAddresses(),
    });

    useEffect(() => {
        filterAddresses(addresses);
    }, [addresses]);

    const filterAddresses = (addresses: IAddress[] | undefined) => {
        if (!addresses) return;
        const primaryAddress =
            addresses.find((address) => address.isPrimary) || null;
        const nonPrimaryAddresses = addresses.filter(
            (address) => !address.isPrimary
        );

        setAddressList(nonPrimaryAddresses);
        setPrimaryAddress(primaryAddress);
    };

    const onSubmit = async (data: IAddress) => {
        if (Object.keys(errors).length > 0) return;
        try {
            const res = await addressService.addAddress(data);
            if (res) {
                const updatedAddresses = await addressService.getAllAddresses();
                filterAddresses(updatedAddresses);
            }
        } catch (err) {
            console.error("Add Address Failed:", err);
        } finally {
            reset();
            setIsAddAddressFormOpen(false);
        }
    };

    const handleOnEdit = async (data: IAddress) => {
        try {
            await addressService.updateAddress(data);
            const updatedAddresses = await addressService.getAllAddresses();
            filterAddresses(updatedAddresses);
        } catch (err) {
            console.error("Edit Address Failed:", err);
        }
    };

    const handleOnDelete = async (id: string) => {
        const addressToDelete = addressList.find(
            (address) => address._id === id
        );
        if (addressToDelete || id === primaryAddress?._id) {
            try {
                await addressService.deleteAddress(id);

                if (id === primaryAddress?._id) {
                    setPrimaryAddress(null);
                } else {
                    const updatedAddresses = addressList.filter(
                        (address) => address._id !== id
                    );
                    setAddressList(updatedAddresses);
                }
            } catch (err) {
                console.error("Delete Address Failed:", err);
            }
        }
    };

    return (
        <ManageAddressContainer>
            <ManageAddressNav onClick={() => navigate(-1)}>
                <KeyboardArrowLeftIcon />
                Back to Account
            </ManageAddressNav>
            <ManageAddressHeader>My Addresses</ManageAddressHeader>

            {addressList.length === 0 && !primaryAddress ? (
                <AddressItem>You have no saved addresses yet.</AddressItem>
            ) : (
                <AddressContainer>
                    {primaryAddress && (
                        <Address
                            key={primaryAddress._id}
                            address={primaryAddress}
                            onDelete={handleOnDelete}
                            onEdit={handleOnEdit}
                        />
                    )}
                    {addressList.map((address, i) => (
                        <Address
                            key={address._id}
                            address={address}
                            index={i + 1}
                            onDelete={handleOnDelete}
                            onEdit={handleOnEdit}
                        />
                    ))}
                </AddressContainer>
            )}

            <button
                className="add-address-btn"
                onClick={() => setIsAddAddressFormOpen(!isAddAddressFormOpen)}>
                Add Address
            </button>

            {isAddAddressFormOpen && (
                <AddAddressForm onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="address-form-title">Add a new address</h4>
                    <AddressForm register={register} errors={errors} />
                    <div className="address-form-actions">
                        <button type="submit" className="address-form-button">
                            Add
                        </button>
                        <button
                            type="button"
                            className="address-form-outline-button"
                            onClick={() => setIsAddAddressFormOpen(false)}>
                            Cancel
                        </button>
                    </div>
                </AddAddressForm>
            )}
        </ManageAddressContainer>
    );
};

export default ManageAddress;
