"use client"

import React, {useCallback} from 'react';
import styles from './Header.module.scss'
import useClickOutside from "@/hooks/useClickOutside";
import Nav from "@/components/UI/Nav/Nav";
import {routes} from "@/routes/routes";

const HeaderBurger = () => {
    const [ref, isShow, setIsShow] = useClickOutside(false)

    const toggleShow = () => setIsShow((isShow: boolean) => !isShow)

    const handleRouteClick = () => {
        toggleShow()
        window.scrollTo({
            top: 0,
            left: 0
        })
    }

    return (
        <>
            <header className={styles.header__burger}>
                <button className={isShow ? [styles.burger__button, styles.active].join(' ') : styles.burger__button}
                        onClick={toggleShow}>
                    <span className={styles.button__bar}></span>
                    <span className={styles.button__bar}></span>
                    <span className={styles.button__bar}></span>
                </button>
            </header>
            <div ref={ref} className={isShow ? [styles.header__popup, styles.active].join(' ') : styles.header__popup}>
                <Nav links={routes} fontWeight={"bold"} flexDirection={"column"} onClick={handleRouteClick}/>
            </div>
        </>
    );
};

export default HeaderBurger;