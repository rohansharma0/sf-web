import styled from "styled-components";

export const AddressFormGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .address-form-input {
        border: 1px solid #e5e5e5;
        padding: 0.85rem;
        font-size: 0.9rem;
        width: 100%;
        border-radius: 0;
    }

    .address-form-error {
        color: #d32f2f;
        font-size: 0.8rem;
        width: 100%;
    }
`;
