import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    color: #000000;
    height: 10vh;
    width: 80%;
    padding: 0.5rem 0;
    box-sizing: border-box;

    .navbar-logo {
        display: flex;
        align-items: center;
        flex: 1;
        cursor: pointer;
    }

    .navbar-search {
        display: flex;
        align-items: center;
        background: #f3f3f3;
        padding: 0.4rem 0.8rem;
        width: 40%;
        max-width: 1000px;
        height: 60%;
        cursor: pointer;
        outline: 1px solid #e5e5e5;
    }

    .navbar-search input {
        border: none;
        outline: none;
        background: transparent;
        flex: 1;
        font-size: 0.95rem;
        margin-left: 0.5rem;
    }

    .search-icon {
        flex-shrink: 0;
    }

    .navbar-icons {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
        justify-content: flex-end;
    }

    .icon-btn {
        background: none;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background 0.2s;
        text-decoration: none;
    }

    .icon-btn:hover {
        background: #f1f1f1;
    }

    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    .menu-btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 24px;
        gap: 5px;
        cursor: pointer;
    }

    .menu-line {
        height: 2px;
        background: #000;
        border-radius: 2px;
        width: 100%;
        display: block;
        transform-origin: center;
    }

    .dropdown-container {
        position: relative;
    }
    .dropdown-menu {
        position: absolute;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        right: 0;
        top: 3rem;
        background: #ffffff;
        padding: 0.3rem;
        outline: 1px solid #e5e5e5;
    }

    .dropdown-item {
        display: flex;
        background: #ffffff;
        gap: 1rem;
        width: 100%;
        justify-content: flex-start;
        font-size: 0.9rem;
        align-items: center;
        border: none;
        cursor: pointer;
        text-align: left;
        padding: 0.8rem 1rem;
        transition: background 0.2s;
        &:hover {
            background: #f1f1f1;
        }
    }
`;
