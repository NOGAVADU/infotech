import React, {FC} from 'react';
import styles from './Title.module.css'

interface TitleProps {
    children: React.ReactNode
}

const Title: FC<TitleProps> = ({ children}) => {

    return (
        <h2 className={styles.title}>
            {children}
        </h2>
    );
};

export default Title;