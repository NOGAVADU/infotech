"use client"

import React, {FC} from 'react';
import styles from './ImageGallery.module.scss'
import Subtitle from "@/components/UI/Text/Subtitle/Subtitle";

export interface ImageGalleryProps {
    title: string;
    children: React.ReactNode;
    style?: string
}

const ImageGallery: FC<ImageGalleryProps> = ({title, children, style}) => {
    return (
        <>
            <Subtitle>{title}</Subtitle>
            <div className={[styles.gallery, style].join(' ')}>
                {children}
            </div>
        </>
    );
};

export default ImageGallery;