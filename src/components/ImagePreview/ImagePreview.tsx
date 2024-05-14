"use client"

import React, {FC, useState} from 'react';
import styles from './ImagePreview.module.scss'
import Modal from "@/components/Modal/Modal";
import Image, {StaticImageData} from "next/image";

export interface ImagePreviewProps {
    src: StaticImageData,
    alt: string
}

const ImagePreview: FC<ImagePreviewProps> = ({src, alt}) => {
    const [isActive, setActive] = useState(false)

    return (
        <>
            <div className={styles.preview}
                 onClick={e => setActive(true)}>
                <Image className={styles.image} src={src} alt={alt}/>
            </div>
            <Modal isActive={isActive} setActive={setActive}>
                <Image className={styles.image} src={src} alt={alt} quality={100}/>
            </Modal>
        </>
    );
};

export default ImagePreview;