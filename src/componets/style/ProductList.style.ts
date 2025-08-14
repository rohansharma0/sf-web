import styled from "styled-components";

export const ProductListSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    align-items: center;
    padding: 3rem 0;

    .product-list-title {
        width: 100%;
        font-size: 37px;
        font-weight: 600;
    }
`;

export const ProductListHeader = styled.div`
    background: #6e6e6e;
    width: 100%;
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`;

export const ProductListHeaderContent = styled.div`   
    display: flex;
    gap: 0.3rem;
    flex-direction: column;
}`;

export const ProductListHeaderTitle = styled.h3`
    font-weight: 800;
    text-transform: uppercase;
    font-size: 2rem;
    color: #fff;
    text-align: center;
`;

export const ProductListHeaderDiscription = styled.h6`
    font-size: 1rem;
    text-align: center;
    color: #fff;
    font-weight: 300;
`;

export const ProductListBody = styled.div`
    display: flex;
    width: 100%;
    gap: 2rem;
`;

export const ProductListFilterContainer = styled.div`
    flex: 1;
`;

export const ProductListWrapper = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
export const ProductListFilterTopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e5e5e5;
    padding: 1rem 0;
    border-bottom: 1px solid #e5e5e5;

    .product-list-filter-top-size-text {
        font-size: 1rem;
        font-weight: 500;
    }

    .product-list-filter-top {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;

        .product-list-filter-top-view {
            display: flex;
            gap: 0.25rem;

            .product-list-filter-top-view-btn {
                border: none;
                background: none;
                cursor: pointer;
            }
        }

        .product-list-filter-top-btn {
            display: flex;
            justify-content: center;
            align-items: center;

            .product-list-filter-top-btn-text {
                font-size: 1rem;
                font-weight: 600;
            }
        }
    }
`;

export const ProductListContainer = styled.div<{ view: "grid" | "list" }>`
    width: 100%;
    gap: 2rem;

    ${({ view }) =>
        view === "grid"
            ? `
                display: grid;
                grid-template-columns: repeat(3, 1fr);
              `
            : `
                display: flex;
                flex-direction: column;
              `}
`;

export const ProductListFilterTopBtnText = styled.button<{ active?: boolean }>`
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        color: ${({ active }) => (active ? "#000" : "#626262")};
    }
`;
