import styled from "styled-components";

export const ManageAddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    width: 100%;
    max-width: 1300px;
    padding: 3rem 0;
    gap: 25px;
    flex: 1;

    .add-address-btn {
        background-color: #000000ff;
        color: white;
        font-size: 14px;
        border: none;
        padding: 1rem 1.5rem;
        cursor: pointer;
        text-transform: uppercase;

        &:hover {
            background: #1d1d1dff;
        }
    }
`;

export const ManageAddressHeader = styled.h3`
    font-size: 37px;
    font-weight: 700;
`;

export const ManageAddressNav = styled.div`
    font-size: 0.95rem;
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`;

export const AddAddressForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    min-width: 400px;
    margin-top: 2rem;

    .address-form-title {
        font-size: 1.2rem;
        font-weight: 600;
    }

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

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    flex-wrap: wrap;
    width: 100%;
`;
