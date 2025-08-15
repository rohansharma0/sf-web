import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const AddressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    gap: 1rem;

    @media (${device.desktop}) {
        width: calc(50% - 1rem);
    }

    .address-item-title {
        font-size: 1.2rem;
        font-weight: 600;
    }
`;

export const AddressItem = styled.div`
    padding: 1rem;
    border: 1px solid #eee;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    flex-grow: 1;

    @media (${device.desktop}) {
        padding: 2rem;
    }

    .address-item-content {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        .address-item-details {
            font-weight: 300;
        }

        .address-item-phone {
            font-weight: 300;
        }

        .address-item-name {
            font-weight: 300;
        }
    }

    .address-item-actions {
        display: flex;
        gap: 1rem;
        cursor: pointer;

        .address-item-link {
            text-decoration: none;
            color: #000;
            font-weight: 400;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

export const AddressFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;

    .address-form-actions {
        display: flex;
        justify-content: space-between;

        .address-form-outline-button {
            padding: 0.85rem;
            font-size: 0.9rem;
            width: 100%;
            text-align: center;
            cursor: pointer;
            background: #fff;
            border: none;
            text-transform: uppercase;

            &:hover {
                text-decoration: underline;
            }
        }

        .address-form-button {
            border: 1px solid #000000ff;
            background: #000;
            color: #fff;
            padding: 0.85rem;
            font-size: 0.9rem;
            width: 100%;
            cursor: pointer;
            text-align: center;
            text-transform: uppercase;

            &:hover {
                background: #1d1d1dff;
            }
        }
    }
`;
