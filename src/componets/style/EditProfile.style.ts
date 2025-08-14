import styled from "styled-components";

export const EditProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    width: 100%;
    max-width: 1300px;
    padding: 3rem 0;
    gap: 25px;
    flex: 1;
`;

export const EditProfileDescription = styled.p`
    font-size: 0.95rem;
    color: #555;
    margin-bottom: 0.5rem;
    line-height: 1.4;
    text-align: left;
    font-weight: 400;
`;

export const EditProfileNav = styled.div`
    font-size: 0.95rem;
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`;

export const EditProfileHeader = styled.h2`
    font-size: 37px;
    font-weight: 700;
`;

export const EditProfileForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 350px;
    margin-top: 1rem;

    .edit-profile-button {
        border: 1px solid #000000ff;
        background: #000;
        color: #fff;
        padding: 0.85rem 2rem;
        font-size: 0.9rem;
        cursor: pointer;
        text-align: center;
        text-transform: uppercase;
        width: fit-content;

        &:hover {
            background: #1d1d1dff;
        }
    }

    .edit-profile-input-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .edit-profile-input {
        border: 1px solid #e5e5e5;
        padding: 0.85rem;
        font-size: 0.9rem;
        width: 100%;
    }

    .edit-profile-error {
        color: #d32f2f;
        font-size: 0.8rem;
        width: 100%;
    }
`;
