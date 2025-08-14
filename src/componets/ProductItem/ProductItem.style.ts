import styled from "styled-components";

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
            : ` gap: 2rem;
                flex-direction: row;
                align-items: center;
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
        top: 2rem;
        font-size: 0.8rem;
        background: #858585;
        color: #fff;
        padding: 0.5rem;
        font-weight: 500;
    }

    .product-on-sale {
        position: absolute;
        right: 0;
        top: 2rem;
        font-size: 0.8rem;
        background: #f44336;
        color: #fff;
        padding: 0.5rem;
        font-weight: 500;
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
                width: 200px;
                height: 200px;
              `}
`;

export const ProductItemBodyWrapper = styled.div<{ view: "grid" | "list" }>`
    display: flex;
    flex-direction: row;
    flex: 1;
    gap: 1rem;

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
