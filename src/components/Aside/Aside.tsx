"use client"

import React from 'react';
import styles from './Aside.module.scss'
import Link from "next/link";
import {asideRoutes} from "@/routes/routes";
import {usePathname} from "next/navigation";
import recycle from '../../../public/recycle.svg'
import Image from "next/image";

const Aside = () => {
    const pathname = usePathname()

    const isActive = (href: string): boolean => {
        return href === pathname
    }

    return (
        <aside className={styles.aside}>
            <ul className={styles.aside__list}>
                {asideRoutes.map(route => (
                    <li className={styles.list__item} key={route.title}>
                        <Link
                            className={[styles.list__link, isActive(route.href.toString()) ? styles.active : ''].join(" ")}
                            href={route.href}>
                            {route.title} <Image src={recycle} alt={'иконка'} className={styles.list__icon}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Aside;