import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const ProductItemContainer = styled.div<{ view: "grid" | "list" }>`
    cursor: pointer;
    overflow: hidden;
    background: #fff;
    display: flex;

    ${({ view }) =>
        view === "grid"
            ? `
            gap: 1rem;
                flex-direction: column;
              `
            : ` gap: 0.75rem;
                flex-direction: row;
                align-items: center;

                @media(${device.desktop}){
                gap: 2rem;
                }
              `};
`;

export const ProductItemImageWrapper = styled.div<{ view: "grid" | "list" }>`
    background: #f5f5f5;
    overflow: hidden;
    flex-shrink: 0;
    position: relative;

    .product-out-of-stock {
        position: absolute;
        right: 0;
        background: #858585;
        color: #fff;
        font-weight: 400;
        font-size: 0.5rem;
        padding: 0.2rem;
        top: 0.75rem;

        @media (${device.desktop}) {
            font-weight: 500;
            font-size: 0.8rem;
            padding: 0.5rem;
            top: 2rem;
        }
    }

    .product-on-sale {
        position: absolute;
        right: 0;
        background: #f44336;
        color: #fff;

        ${({ view }) =>
            view === "list"
                ? `
                font-weight: 400;
                font-size: 0.5rem;
                padding: 0.2rem;
                top: 0.75rem;

                @media (${device.desktop}) {
                    font-weight: 500;
                    font-size: 0.8rem;
                    padding: 0.5rem;
                    top: 2rem;
                }
            `
                : `font-weight: 500;
                    font-size: 0.8rem;
                    padding: 0.5rem;
                    top: 2rem;`}
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    ${({ view }) =>
        view === "grid"
            ? `
                width: 100%;
                height: 400px;
              `
            : `
                width: 125px;
                height: 150px;

                @media(${device.desktop}){
                width: 200px;
                height: 200px;
                }
              `}
`;

export const ProductItemBodyWrapper = styled.div<{ view: "grid" | "list" }>`
    display: flex;
    flex-direction: row;
    flex: 1;
    gap: 0.5rem;

    @media (${device.desktop}) {
        gap: 1rem;
    }

    .product-item-details {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;

        .product-item-title {
            font-size: 1rem;
            font-weight: 500;
        }

        .product-item-description {
            font-size: 0.85rem;
            color: #777;
            line-height: 1.3;
            display: -webkit-box;
            -webkit-line-clamp: ${({ view }) => (view === "grid" ? 1 : 3)};
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .product-item-price {
            display: flex;
            gap: 0.5rem;

            .product-item-price-new {
                font-size: 0.95rem;
                font-weight: 600;
                color: #000000;
            }
            .product-item-compare-price {
                font-size: 0.9rem;
                font-weight: 600;
                text-decoration: line-through;
                color: #878787;
            }
        }
    }

    .product-item-icons {
        display: flex;
        gap: 0.5rem;
        align-items: flex-end;
        flex-direction: ${({ view }) => (view === "grid" ? "row" : "column")};
        justify-content: center;
        .product-item-icon-btn {
            border: none;
            background: black;
            color: #fff;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: background 0.2s ease;

            &:hover {
                background: #333;
            }
        }
    }
`;
