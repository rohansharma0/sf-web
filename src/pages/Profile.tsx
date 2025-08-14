import { Link } from "react-router";
import {
    DetailsContainer,
    ProfileContainer,
    ProfileContent,
    ProfileHeader,
} from "../componets/style/Profile.style";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import type { IAddress } from "../types/Address";
import { addressService } from "../services/addressServices";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import type { IUser } from "../types/User";
import { userService } from "../services/userService";

const Profile = () => {
    const { data: addresses } = useQuery<IAddress[]>({
        queryKey: ["addresses"],
        queryFn: () => addressService.getAllAddresses(),
    });

    const { data: user } = useQuery<IUser>({
        queryKey: ["user"],
        queryFn: () => userService.getUser(),
    });

    const [address, setAddress] = useState<IAddress | null>(null);

    useEffect(() => {
        let address = addresses?.find((address) => address.isPrimary) || null;

        if (!address) {
            address = addresses ? addresses[0] : null;
        }
        setAddress(address);
    }, [addresses]);

    return (
        <ProfileContainer>
            <ProfileHeader>
                <h1 className="profile-title">My account</h1>
                <div className="profile-info">
                    <h2 className="profile-subtitle">
                        Welcome back, {user?.name}!
                    </h2>
                    <p className="profile-description">
                        This is your dashboard, here you will find all
                        information about your details and your addresses.
                    </p>
                </div>
            </ProfileHeader>
            <ProfileContent>
                <DetailsContainer>
                    <h3 className="details-title">My Details</h3>
                    <div className="details-container">
                        <div className="details-item">
                            <h6 className="details-item-label">Name</h6>
                            <h6 className="details-item-label">Email</h6>
                        </div>
                        <div className="details-item">
                            <p className="details-item-description">
                                {user?.name}
                            </p>
                            <p className="details-item-description">
                                {user?.email}
                            </p>
                        </div>
                    </div>
                    <Link to="/profile/edit" className="profile-link">
                        Edit Details <ChevronRightIcon fontSize="small" />
                    </Link>
                </DetailsContainer>
                <DetailsContainer>
                    <h3 className="details-title">My Addresses</h3>
                    {!address ? (
                        <div className="address-container">
                            <p className="address-item-details">
                                You have no saved addresses yet.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="address-container">
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
                                <p className="address-item-phone">
                                    {address.phoneNumber}
                                </p>
                            </div>
                        </>
                    )}
                    <Link to="/profile/address" className="profile-link">
                        Manage Address <ChevronRightIcon fontSize="small" />
                    </Link>
                </DetailsContainer>
            </ProfileContent>
        </ProfileContainer>
    );
};

export default Profile;
