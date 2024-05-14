import React from 'react';
import styles from './Text.module.css'
const Text = ({children} : {children: React.ReactNode}) => {
    return (
        <section className={styles.text}>
            {children}
        </section>
    );
};

export default Text;