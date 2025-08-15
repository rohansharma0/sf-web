import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const GoBackNavContainer = styled.div`
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    position: relative;
    padding-left: 14px;

    @media (${device.desktop}) {
        font-size: 0.95rem;
        font-weight: 600;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
    }

    svg {
        font-size: 18px;
        position: absolute;
        left: -5px;
        top: -2px;
    }
`;
