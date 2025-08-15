import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    width: 90%;
    max-width: 1300px;
    margin: 0 auto;
    align-items: flex-start;
    padding: 1rem 0;

    @media (${device.desktop}) {
        padding: 3rem 0;
        width: 100%;
    }

    .product-images-container {
        flex: 1.7;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .product-images-container-slider {
            display: flex;
            justify-content: center;
            align-items: center;

            .product-images-slider-btn {
                width: 50px;
                padding: 1rem;
                border: none;
                background: #fff;
                font-size: 1.5rem;
                font-weight: 600;
                color: #a3a3a3;
                cursor: pointer;
            }

            .product-images-slider-image-active {
                height: 600px;
                flex: 1;
                background: #a9a9a9;
            }
        }

        .product-images-slider-images {
            display: flex;
            gap: 1rem;
            justify-content: center;

            .product-images-slider-image {
                background: #a9a9a9;
                padding: 1rem;
                border: 2px solid transparent;
                cursor: pointer;
                &.active {
                    border-color: #000;
                }

                .product-images-slider-thumb {
                    height: 50px;
                    width: 50px;
                }
            }
        }
        .product-images-description-container {
            .product-images-description-title {
            }

            .product-images-description-text {
            }
        }

        .frequently-questions-container {
            .frequently-questions-container-title {
            }

            .frequently-questions-body {
                .frequently-questions {
                    .frequently-questions-title {
                    }

                    .frequently-questions-answer {
                    }
                }
            }
        }
    }

    .product-info-container {
        flex: 1;
    }
`;
