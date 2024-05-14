"use client"

import React from 'react';
import styles from './Footer.module.scss'
import Link from "next/link";
import Nav from "@/components/UI/Nav/Nav";
import NavLink from "@/components/UI/Nav/__Link/NavLink";
import {routes} from "@/routes/routes";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
        })
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <p className={styles.footer__copywrite}> &#169; «ИнфоТех» - утилизация оргтехники, компьютеров,
                    переферии, техническа экспертиза, возврат
                    денежных
                    средств за драгметаллы, 2009-2024</p>
                <div className={styles.footer__info}>
                    <Nav links={routes} showActive={false} onClick={scrollToTop}/>
                    <address className={styles.info__contacts}>
                        <p className={styles.contacts__text}>
                            Телефон/ факс: <a className={styles.contacts__link} href={'tel:(4812) 21-85-37'}>
                            (4812) 21-85-37
                        </a>
                        </p>
                        <p className={styles.contacts__text}>
                            Почта: <a className={styles.contacts__link} href={'mailto:util-komp@yandex.ru'}>
                            util-komp@yandex.ru
                        </a>
                        </p>
                    </address>
                </div>
            </div>
        </footer>
    );
};

export default Footer;