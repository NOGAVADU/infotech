import React from 'react';
import styles from './Accent.module.css'
const Accent = ({children} : {children: React.ReactNode}) => {
    return (
        <strong className={styles.accent}>
            {children}
        </strong>
    );
};

export default Accent;