import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;

    @media (${device.desktop}) {
        gap: 1rem;
    }

    .footer-wrapper {
        width: 100%;
        background: #f2f2f1;

        .footer-container {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
            flex-direction: column-reverse;
            gap: 1rem;
            width: 90%;

            @media (${device.desktop}) {
                flex-direction: row;
                width: 100%;
                max-width: 1300px;
                gap: 0;
            }

            .footer-rights-container {
                display: flex;
                font-size: 0.8rem;
                gap: 0.5rem;
                justify-content: center;
                align-items: center;

                .footer-rights {
                    color: #2a2a2a;
                    font-size: 0.8rem;
                    font-weight: 300;
                    line-height: 1rem;
                }
            }

            .footer-payment {
                display: flex;
                gap: 0.5rem;

                .payment-logo {
                    background: #fff;
                    outline: 1px solid #e7e7e7;
                    padding: 5px;
                    height: 24px;
                    width: 36px;
                    border-radius: 2px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .payment-img {
                        width: 100%;
                    }
                }
            }
        }
    }

    .footer-content {
        max-width: 1300px;
        margin: 0 auto;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
        width: 90%;
        gap: 1rem;

        @media (${device.desktop}) {
            display: flex;
            width: 100%;
            padding: 1rem 0;
        }

        .footer-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .footer-item-title {
                font-size: 18px;
                font-weight: 600;
                color: #2a2a2a;
            }
            .footer-item-ul {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 0.4rem;

                .footer-item-li {
                    font-weight: 400;
                    font-size: 15px;
                    color: #373737;
                    &:hover {
                        color: #000000;
                    }
                }
            }
            .footer-item-social {
                display: flex;
                gap: 1rem;

                .footer-item-social-icon {
                    color: #373737;

                    &:hover {
                        color: #000000;
                    }
                }
            }
        }
    }
`;
