"use client"

import React, {FC, ReactElement, useEffect} from 'react';
import styles from './Nav.module.scss'
import {Property} from "csstype";
import NavLink, {INavLinksProps} from "@/components/UI/Nav/__Link/NavLink";
import {TRoute} from "@/routes/routes";
import {usePathname} from "next/navigation";

interface Props {
    links: TRoute[],
    flexDirection?: Property.FlexDirection,
    fontSize?: "small" | "regular" | "large",
    fontWeight?: "light" | "regular" | "bold",
    gap?: Property.Gap,
    onClick?: () => void,
    showActive?: boolean
}

const fontSizeValue = {
    small: "var(--small-font-size)",
    regular: "var(--main-font-size)",
    large: "var(--accent-font-size)"
}

const fontWeightValue = {
    light: "var(--font-weight-light)",
    regular: "var(--font-weight-regular)",
    bold: "var(--font-weight-bold)",
}

const Nav: FC<Props> = (
    {
        flexDirection = 'row',
        fontSize = "regular",
        fontWeight = "regular",
        gap = "2rem",
        onClick,
        showActive = true,
        links,
    }) => {
    const pathname = usePathname()
    const isActive = (href: string): boolean => {
        return href === pathname
    }

    return (
        <nav
            className={[styles.nav].join(" ")}>
            <ul style={{
                flexDirection: flexDirection,
                gap: gap,
                fontSize: fontSizeValue[fontSize],
                fontWeight: fontWeightValue[fontWeight]
            }}
                className={styles.list}>
                {links.map(link => (
                    <NavLink key={link.href.toString()}
                             href={link.href}
                             active={showActive ? isActive(link.href.toString()) : false}
                             onClick={onClick}
                    >
                        {link.title}
                    </NavLink>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;