import React from 'react';
import styles from './LicenceGallery.module.scss'
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import ImagePreview from "@/components/ImagePreview/ImagePreview";
import licence1 from '../../../public/licenziya1.jpg'
import licence2 from "../../../public/licenziya2.jpg";
import licence3 from "../../../public/licenziya3.jpg";
import certificate1 from "../../../public/certificate1.jpg";
import certificate2 from "../../../public/certificate2.jpg";
import record from "../../../public/record.jpg";

const LicenceGallery = () => {
    return (
        <section className={styles.container}>
            <ImageGallery title={'Лицензия:'}>
                <ImagePreview src={licence1} alt={'Лицензия'}/>
                <ImagePreview src={licence2} alt={'Лицензия'}/>
                <ImagePreview src={licence3} alt={'Лицензия'}/>
            </ImageGallery>
            <ImageGallery title={'Сертификат:'}>
                <ImagePreview src={certificate1} alt={'Лицензия'}/>
                <ImagePreview src={certificate2} alt={'Лицензия'}/>
            </ImageGallery>
            <ImageGallery title={'Спец учёт:'}>
                <ImagePreview src={record} alt={'Лицензия'}/>
            </ImageGallery>
        </section>
    );
};

export default LicenceGallery;