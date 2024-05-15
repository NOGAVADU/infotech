"use client"

import React, {FC, SetStateAction, useEffect, useState} from 'react';
import styles from './Modal.module.scss'


export interface ModalProps {
    children: React.ReactNode,
    isActive: boolean,
    setActive: React.Dispatch<SetStateAction<boolean>>
}

const Modal: FC<ModalProps> = ({children, isActive = false, setActive}) => {
    const closeModal = () => {
        setActive(false)
    }

    useEffect(() => {
        const keyHandle = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal()
        }

        window.addEventListener('keydown', keyHandle)

        return () => window.removeEventListener('keydown', keyHandle)
    }, [])

    return (
        <div className={[styles.modal, isActive ? styles.active : ""].join(" ")}
             onClick={closeModal}
        >
            <section className={[styles.modal__content, isActive ? styles.active : ""].join(" ")}
                     onClick={e => e.stopPropagation()}>
                <button onClick={closeModal} className={styles.closeBtn}>&#10006;</button>
                {children}
                <div className={styles.modal__body}>
                </div>
            </section>
        </div>
    );
};

export default Modal;