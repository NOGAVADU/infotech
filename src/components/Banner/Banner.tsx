"use client"

import React, {RefObject, useEffect, useRef} from 'react';
import styles from './Banner.module.scss'
import Image from "next/image";
import logo from '../../../public/logo.png'
import banner from '../../../public/banner.png'

const Banner = () => {
    return (
        <div className={styles.container}>
            <article className={styles.logo}>
                <Image src={logo} alt={"Логотип компании. Надпись 'Инфотех'. Утилизация оргтехники в Смоленске"}
                       width={320}/>
                <h2 className={styles.logo__subtitle}>Утилизация оргтехники в Смоленске</h2>
            </article>
            <address className={styles.contacts}>
                <p className={styles.contacts__text}>
                    Т/ф: <a className={styles.contacts__link} href={'tel:(4812) 21-85-37'}>
                    <span className={styles.text_light}>(4812)</span> <span className={styles.text_big}>21-85-37</span>
                </a>
                </p>
                <p className={styles.contacts__text}>
                    Почта: <a className={styles.contacts__link} href={'mailto:util-komp@yandex.ru'}>
                    util-komp@yandex.ru
                </a>
                </p>
            </address>
        </div>
    );
};

export default Banner;