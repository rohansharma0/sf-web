import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const CartContainer = styled.div`
    width: 90%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (${device.desktop}) {
        padding: 3rem 0;
        width: 100%;
    }
`;
