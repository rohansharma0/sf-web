import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: var(--footer-bg);
    color: var(--footer-text);
    padding: var(--footer-sm-padding);

    @media (${device.desktop}) {
        padding: 0;
    }
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-4);

    @media (${device.desktop}) {
        margin: 0 auto;
        width: 100%;
        max-width: 1300px;
        flex-direction: row;
        justify-content: space-between;
        padding: var(--footer-lg-padding) 0;
    }
`;

export const FooterItem = styled.div`
    border-bottom: 1px solid var(--color-border);
    padding-bottom: var(--space-2);

    @media (${device.desktop}) {
        border: none;
        padding-bottom: 0;
    }
`;

export const FooterTitle = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    color: var(--color-text);
    background: none;
    border: none;
    width: 100%;
    padding: var(--space-2) 0;
    cursor: pointer;

    span {
        transition: transform 0.2s ease;
    }

    &[aria-expanded="true"] span {
        transform: rotate(180deg);
    }

    @media (${device.desktop}) {
        cursor: default;
        span {
            display: none;
        }
    }
`;

export const FooterTitleText = styled.p`
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    color: var(--color-text);
    width: 100%;
    padding: 0 0 var(--space-3) 0;
`;

export const FooterContentInner = styled.div<{ $isOpen?: boolean }>`
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    gap: var(--space-2);
    padding: var(--space-2) 0;

    @media (${device.desktop}) {
        display: flex !important;
        padding: 0;
        gap: var(--space-1);
    }
`;

export const FooterList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const FooterListItem = styled.li`
    margin: var(--space-1) 0;

    a {
        font-size: var(--font-size-sm);
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    gap: var(--space-2);
    margin-bottom: var(--space-3);
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--footer-social-icon-bg);
        padding: var(--space-2);
        transition: background var(--transition-fast);
        margin: var(--space-1) 0;
        border-radius: var(--radius-sm);
        &:hover {
            background: var(--footer-social-icon-hover);
        }

        svg {
            color: var(--footer-social-icon-color);
        }
    }
`;

export const Newsletter = styled.div`
    text-align: center;
    padding: var(--space-6) var(--space-4);

    h4 {
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-bold);
    }

    p {
        font-size: var(--font-size-sm);
        color: var(--color-text-muted);
        margin: var(--space-1) 0 var(--space-2);
    }

    .newsletter-input {
        display: flex;
        justify-content: center;
        gap: var(--space-1);
        flex-wrap: wrap;

        input {
            padding: var(--space-2);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm) 0 0 var(--radius-sm);
            flex: 1 1 200px;
        }

        button {
            padding: var(--space-2) var(--space-4);
            background: var(--color-primary);
            color: #fff;
            border: none;
            border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
            cursor: pointer;
            transition: background var(--transition-fast);

            &:hover {
                background: var(--color-primary-hover);
            }
        }
    }
`;

export const FooterWrapper = styled.div`
    width: 100%;
    background: var(--footer-sm-rights-bg);

    @media (${device.desktop}) {
        background: var(--footer-lg-rights-bg);
    }
`;

export const FooterBottom = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    padding: var(--space-4) 0;
    width: 90%;

    @media (${device.desktop}) {
        flex-direction: row;
        max-width: 1300px;
    }
`;

export const FooterRights = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--font-size-xs);
    height: 16px;
    img {
        height: 14px;
    }

    p {
        color: var(--color-text);
        font-size: var(--font-size-xs);
        margin: 0;
    }
`;

export const FooterPayment = styled.div`
    display: flex;
    gap: var(--space-2);

    .payment-logo {
        background: var(--color-background);
        outline: 1px solid var(--color-border);
        padding: var(--space-1);
        height: 18px;
        width: 32px;
        border-radius: var(--radius-sm);
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-height: 100%;
            max-width: 100%;
        }
    }
`;
