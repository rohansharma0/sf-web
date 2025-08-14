import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    outline: 1px solid #e5e5e5;
    position: relative;
    z-index: 100;

    .category-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: 10;
    }

    .navbar-categories {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .navbar-categories-list {
        display: flex;
        list-style: none;
    }
    .navbar-category-item {
        padding: 1rem;
        color: #222321;
        cursor: pointer;
    }

    .navbar-category-link {
        text-decoration: none;
        color: inherit;
        font-size: 1.05rem;
        font-weight: 500;
        position: relative;
    }

    .navbar-category-link::after {
        content: "";
        position: absolute;
        height: 1px;
        display: block;
        width: 0;
        left: 0;
        bottom: -5px;
        background: #222321;
        transition: width 0.3s ease;
    }

    .navbar-category-link:hover::after {
        width: 100%;
    }
`;

export const SubcategoryMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    width: 100%;
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    cursor: default;
    gap: 2rem;
    flex-wrap: wrap;

    .subcategory-item {
        cursor: pointer;
        transition: color 0.2s ease;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;
        width: fit-content;
    }

    .subcategory-image {
        width: 200px;
        height: 200px;
        border-radius: 10px;
    }

    .subcategory-title {
        font-size: 1.1rem;
        font-weight: 400;
    }

    .subcategory-item:hover {
        color: #007aff;
    }
`;
