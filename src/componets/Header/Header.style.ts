import styled from "styled-components";
import { device } from "../../utils/breakpoints";
import { motion } from "framer-motion";

export const HeaderContainer = styled.header`
    position: sticky;
    top: 0;
    z-index: var(--header-z-index);
    width: 100%;
    background: var(--header-background);
    border-bottom: 1px solid var(--header-border);
`;

export const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--header-height-sm);
    position: relative;
    padding: 0 var(--header-sm-padding);

    @media (${device.desktop}) {
        padding: 0;
        margin: 0 auto;
        width: 100%;
        max-width: 1300px;
    }
`;

export const MobileMenuContainer = styled(motion.div)<{ $isOpen?: boolean }>`
    position: fixed;
    inset: 0;
    background: var(--color-surface);
    z-index: var(--z-mobile-menu);
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    padding: var(--spacing-md);

    .menu-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--spacing-lg);

        .logo {
            height: var(--logo-height);
        }

        button {
            font-size: var(--font-size-lg);
            background: none;
            border: none;
            cursor: pointer;
        }
    }

    .menu-items {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);

        a {
            text-decoration: none;
            color: var(--color-text);
            font-size: var(--font-size-md);
            font-weight: var(--font-weight-medium);

            &:hover {
                color: var(--color-primary);
            }
        }
    }
`;

export const DesktopMenuContainer = styled.ul`
    flex: 1;
    display: none;
    justify-content: flex-start;
    align-items: center;
    gap: var(--spacing-md);

    @media (${device.desktop}) {
        display: flex;
    }

    .category-container {
        position: relative;

        .category-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            background: var(--color-surface);
            min-width: var(--dropdown-width);
            display: flex;
            flex-direction: column;
            z-index: var(--z-dropdown);

            .dropdown-cat {
                position: relative;
                white-space: nowrap;

                a {
                    text-decoration: none;
                    color: var(--color-text-light);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: var(--font-size-sm);
                    font-weight: var(--font-weight-regular);
                    padding: var(--spacing-xs) var(--spacing-md);
                }

                &:hover a {
                    color: var(--color-text);
                }

                &:first-child {
                    padding-top: var(--spacing-sm);
                }

                &:last-child {
                    padding-bottom: var(--spacing-sm);
                }
            }
        }

        .subcategory-dropdown {
            position: absolute;
            left: calc(var(--dropdown-width) + var(--spacing-xs));
            top: 0;
            background: var(--color-surface);
            min-width: var(--dropdown-width);
            display: flex;
            flex-direction: column;
            z-index: var(--z-dropdown);

            .dropdown-sub-cat {
                padding: var(--spacing-xs) var(--spacing-md);
                text-decoration: none;
                color: var(--color-text-light);
                font-size: var(--font-size-sm);
                font-weight: var(--font-weight-regular);

                &:first-child {
                    padding-top: var(--spacing-md);
                }

                &:last-child {
                    padding-bottom: var(--spacing-md);
                }

                &:hover {
                    color: var(--color-text);
                }
            }
        }
    }

    .nav-items {
        list-style: none;
        padding: var(--spacing-xs) 0;
        cursor: pointer;
        transition: background var(--transition-fast);

        .nav-link {
            padding: var(--spacing-xxs) 0;
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
            background: var(--color-text);
            transition: width var(--transition-normal);
        }

        .nav-link-sale {
            position: relative;
            display: block;
            background: var(--color-sale-bg);
            padding: var(--spacing-xxs) var(--spacing-sm);
            color: var(--color-sale-text);
            border-bottom: var(--border-sale);
        }

        .nav-link:hover::after {
            width: 100%;
        }
    }
`;

export const MenuButtonStyled = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: var(--menu-icon-btn-size);
    height: var(--menu-icon-btn-size);
    cursor: pointer;
    margin-right: var(--menu-icon-margin-right);
    background: none;

    @media (${device.desktop}) {
        display: none;
    }

    .line {
        height: var(--menu-line-height);
        background: var(--menu-line-color);
        border-radius: var(--radius-sm);
        width: var(--menu-line-width);
        display: block;
        transform-origin: center;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    height: var(--header-logo-height);
    padding-bottom: 3px;
    a {
        height: var(--header-logo-height);

        &:hover {
        }

        .logo {
            height: var(--header-logo-height);
        }
    }

    @media (${device.tablet}) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const NavBarActionsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: var(--nav-actions-gap);
    margin-left: auto;
    position: relative;

    a {
        height: var(--nav-actions-icon-btn-size);
        width: var(--nav-actions-icon-btn-size);

        svg {
            height: 100%;
            width: 100%;
        }
    }

    .dropdown-container {
        position: relative;

        .dropdown-menu {
            position: absolute;
            top: calc(var(--header-height-sm));
            right: 0;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            box-shadow: var(--shadow-md);
            display: flex;
            flex-direction: column;
            min-width: var(--dropdown-width);
            border-radius: var(--radius-sm);
            overflow: hidden;
            z-index: var(--z-dropdown);

            .dropdown-item {
                padding: var(--spacing-xs) var(--spacing-sm);
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: var(--spacing-xs);
                border: none;
                background: none;
                text-decoration: none;
                color: var(--color-text);
                font-size: var(--font-size-sm);

                &:hover {
                    background: var(--color-background-hover);
                }
            }
        }
    }

    @media (${device.tablet}) {
        flex: 0 0 auto;
        margin-left: auto;
    }
`;
