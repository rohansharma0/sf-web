import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    width: 90%;
    max-width: 1300px;
    padding: 1rem 0;
    gap: 25px;
    flex: 1;

    @media (${device.desktop}) {
        padding: 3rem 0;
        width: 100%;
    }
`;
