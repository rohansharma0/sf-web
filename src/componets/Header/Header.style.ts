import styled from "styled-components";

export const NavBarContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #fff;
    z-index: 105;
    height: 100%;

    .category-container {
        position: relative;

        .category-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            min-width: 200px;
            display: flex;
            flex-direction: column;
            z-index: 110;

            .dropdown-cat {
                position: relative;
                white-space: nowrap;

                a {
                    text-decoration: none;
                    color: #373737;
                    display: block;
                    font-size: 0.9rem;
                    font-weight: 400;
                    padding: 0.5rem 1.5rem 0.5rem 1.8rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                &:hover a {
                    color: #000;
                }

                &:first-child {
                    padding-top: 1rem;
                }

                &:last-child {
                    padding-bottom: 1rem;
                }
            }
        }
        .subcategory-dropdown {
            position: absolute;
            left: 205px;
            top: 0;
            background: white;
            min-width: 200px;
            display: flex;
            flex-direction: column;
            z-index: 111;

            .dropdown-sub-cat {
                padding: 0.5rem 1.8rem;
                text-decoration: none;
                color: #373737;
                font-size: 0.9rem;
                font-weight: 400;

                &:first-child {
                    padding-top: 1.5rem;
                }

                &:last-child {
                    padding-bottom: 1.5rem;
                }

                &:hover {
                    color: #000;
                }
            }
        }
    }

    .nav-wrapper {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        max-width: 1500px;
        display: flex;

        .nav-items-ul {
            flex: 1;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 1.5rem;

            .nav-items {
                list-style: none;
                padding: 0.75rem 0;
                cursor: pointer;
                transition: background 0.2s;

                .nav-link {
                    padding: 0.25rem 0;
                    position: relative;
                    display: block;
                }

                .nav-link::after {
                    content: "";
                    position: absolute;
                    height: 1px;
                    display: block;
                    width: 0;
                    left: 0;
                    bottom: 0;
                    background: #222321;
                    transition: width 0.3s ease;
                }

                .nav-link-sale {
                    position: relative;
                    display: block;
                    background: #ff5722;
                    padding: 5px 0.75rem 2px 0.75rem;
                    color: #fff;
                    border-bottom: 3px solid #df4210;
                }

                .nav-link:hover::after {
                    width: 100%;
                }
            }
        }
    }

    .nav-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;

        .nav-logo-img {
            transition: height 0.2s ease-in-out;
        }
    }

    .nav-icons {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
        justify-content: flex-end;

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
        }

        .icon-btn:hover {
            background: #f1f1f1;
        }

        .dropdown-container {
            position: relative;

            .dropdown-menu {
                position: absolute;
                z-index: 10;
                display: flex;
                flex-direction: column;
                right: 0;
                top: 3rem;
                background: #ffffff;
                padding: 0.3rem;
                border: 1px solid #e5e5e5;
                box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);

                .dropdown-item {
                    display: flex;
                    gap: 1rem;
                    width: 100%;
                    font-size: 0.9rem;
                    align-items: center;
                    border: none;
                    cursor: pointer;
                    padding: 0.8rem 1rem;
                    background: transparent;
                    transition: background 0.2s;
                    text-decoration: none;
                    color: inherit;

                    &:hover {
                        background: #f1f1f1;
                    }
                }
            }
        }
    }
`;

export const HeaderContainer = styled.header`
    background: #ffffff;
    height: 10vh;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e5e5e5;

    .overlay {
        position: fixed;
        inset: 0;
        background: black;
        z-index: 100;
    }
`;
