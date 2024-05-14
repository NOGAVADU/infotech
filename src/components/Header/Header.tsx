import React from 'react';
import styles from './Header.module.scss'
import Nav from "@/components/UI/Nav/Nav";
import {routes} from "@/routes/routes";
import HeaderBurger from "@/components/Header/HeaderBurger";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Nav links={routes} fontWeight={"bold"}/>
            </header>
            <HeaderBurger/>
        </>
    );
};

export default Header;