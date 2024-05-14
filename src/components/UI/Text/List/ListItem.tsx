import React from 'react';
import styles from "@/components/UI/Text/List/List.module.css";

const ListItem = ({children} : {children: React.ReactNode}) => {
    return (
        <li className={styles.list__item}>
            {children}
        </li>
    );
};

export default ListItem;