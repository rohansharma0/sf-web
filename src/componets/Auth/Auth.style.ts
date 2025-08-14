import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (${device.desktop}) {
        height: 70vh;
    }
`;

export const AuthSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 5rem 0;
    margin: 0 auto;
    width: 90%;

    @media (${device.desktop}) {
        min-width: 400px;
    }

    .auth-title {
        font-size: 2.5rem;
        font-weight: 700;
        text-transform: capitalize;
        text-align: center;
    }

    .auth-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        width: 100%;
    }

    .auth-form-error {
        color: #d32f2f;
        font-size: 0.8rem;
        width: 100%;
    }

    .auth-form-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .auth-form-input {
        border: 1px solid #e5e5e5;
        padding: 0.85rem;
        font-size: 0.9rem;
        width: 100%;
    }
    .auth-form-button {
        border: 1px solid #000000ff;
        background: #000;
        color: #fff;
        padding: 0.85rem;
        font-size: 0.9rem;
        width: 100%;
        cursor: pointer;
        text-align: center;
        text-transform: uppercase;
    }

    .auth-form-button:hover {
        background: #1d1d1dff;
    }

    .auth-btn-group {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
    }

    .auth-form-outline-button {
        padding: 0.85rem;
        font-size: 0.9rem;
        width: 100%;
        text-align: center;
        cursor: pointer;
        border: 1px solid #e5e5e5;
        background: none;
        color: #000;
    }

    .auth-form-outline-button:hover {
        background: #f3f3f3;
    }

    .auth-form-forget {
        color: #1d1d1d;
        text-align: right;
        font-size: 0.9rem;
        cursor: pointer;
        padding-top: 0.5rem;
    }

    .auth-form-forget:hover {
        text-decoration: underline;
    }
`;
