import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    max-width: 1300px;
    margin: 0 auto;
    align-items: flex-start;
    padding: 1rem 0;

    @media (${device.desktop}) {
        padding: 3rem 0;
        width: 100%;
        flex-direction: row;
        gap: 3rem;
    }

    .product-images-container {
        flex: 1.7;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;

        @media (${device.desktop}) {
            gap: 2rem;
        }

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
                display: none;

                @media (${device.desktop}) {
                    gap: 2rem;
                    display: block;
                }
            }

            .product-images-slider-image-active {
                height: 400px;
                flex: 1;
                background: #a9a9a9;

                @media (${device.desktop}) {
                    height: 600px;
                }
            }
        }

        .product-images-slider-images {
            display: flex;
            gap: 1rem;
            display: none;
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
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .product-info-text-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            h1.product-info-title-text {
                font-size: 1.4rem;
                font-weight: 600;
            }
            p.product-info-discription-text {
                font-size: 0.95rem;
                color: #a9a9a9;
            }
        }
        .product-info-text-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            .product-info-price-wrapper {
                display: flex;
                gap: 0.4rem;
                align-items: center;

                p.product-info-price {
                    font-size: 1.1rem;
                    font-weight: 600;
                }
                p.product-info-compare-price {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #a9a9a9;
                    text-decoration: line-through;
                }
            }
        }

        .product-btn-wrapper {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .product-add-to-cart-wrapper {
                display: flex;
                gap: 1rem;

                input.product-quantity-input {
                    width: 60px;
                    height: 45px;
                    border: 1px solid #e5e5e5;
                    border-radius: 0;
                    padding: 8px 4px 8px 8px;
                }

                button.product-add-to-cart-btn {
                    width: 100%;
                    background: #000;
                    color: #fff;
                    text-transform: uppercase;
                }
            }

            button.product-buy-now-btn {
                background: #5b5b5b;
                height: 45px;
                text-transform: uppercase;
                color: #fff;
            }
        }
    }
`;
