import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    max-width: 1300px;
    padding: 1rem 0;
    gap: 3rem;
    flex: 1;

    @media (${device.desktop}) {
        width: 100%;
        padding: 3rem 0;
    }
`;

export const ProfileHeader = styled.div`
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2.2rem;
    justify-content: center;
    align-items: flex-start;
    color: #fff;
    background: #3d3d3d;
    gap: 2rem;

    .profile-title {
        font-size: 2.2rem;
        font-weight: 800;
    }

    .profile-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
    .profile-subtitle {
        font-size: 1.2rem;
        font-weight: 500;
        text-align: left;
    }

    .profile-description {
        font-size: 0.95rem;
        font-weight: 300;
        width: 90%;
        text-align: left;
    }

    @media (${device.desktop}) {
        padding: 3.5rem 3rem 2.5rem 3rem;
        gap: 2.5rem;

        .profile-title {
            font-size: 2.6rem;
        }

        .profile-subtitle {
            font-size: 1.5rem;
        }
        .profile-description {
            width: 70%;
        }
    }
`;

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;

    @media (${device.desktop}) {
        flex-direction: row;
    }
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.7rem;

    @media (${device.desktop}) {
        gap: 1.2rem;
    }

    .details-title {
        font-size: 1.3rem;
        font-weight: 600;
    }

    .details-container {
        padding: 1rem;
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        outline: 1px solid #e5e5e5;
        margin-top: 0.7rem;
        flex: 1;
        justify-content: flex-start;

        .details-item {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .details-item-label {
            font-size: 0.95rem;
            font-weight: 600;
        }

        .details-item-description {
            font-size: 0.95rem;
            font-weight: 300;
        }
    }

    .address-container {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        outline: 1px solid #e5e5e5;
        margin-top: 0.7rem;
        flex: 1;
        justify-content: flex-start;

        .address-item-name {
            font-size: 0.95rem;
            font-weight: 600;
        }

        .address-item-details {
            font-size: 0.95rem;
            font-weight: 300;
        }

        .address-item-phone {
            font-size: 0.95rem;
            font-weight: 300;
        }
    }

    .profile-link {
        display: flex;
        align-items: center;
        font-weight: 600;
        color: #000000ff;
        transition: color 0.3s ease;
        width: fit-content;
        background: transparent;
        border: none;
        font-size: 0.9rem;
        cursor: pointer;
    }
`;
