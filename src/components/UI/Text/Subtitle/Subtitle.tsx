import React from 'react';
import styles from './Subtitle.module.css'

const Subtitle = ({children}: { children: React.ReactNode }) => {
    return (
        <h3 className={styles.subtitle}>
            {children}
        </h3>
    );
};

export default Subtitle;