"use client"
import React, {FC} from 'react';
import Link from "next/link";
import styles from './NavLink.module.scss'
import {UrlObject} from "url";

export interface INavLinksProps {
    href: string | UrlObject,
    children: React.ReactNode,
    active?: boolean,
    onClick?: () => void,
}

const NavLink: FC<INavLinksProps> = (
    {
        href,
        children,
        active,
        onClick
    }
) => {

    return (
        <li className={styles.item}>
            <Link onClick={onClick} className={[styles.link, active ? styles.active : ''].join(" ")} href={href}>{children}</Link>
        </li>
    );
};

export default NavLink;