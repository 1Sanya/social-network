import React, {FC} from 'react';
import {PhotosImageT} from "../../../../Types/PhotosT";
import s from './Photos_image.module.css'

const PhotosImage:FC<PhotosImageT> = (props) => {
    return (
        <div className={s.wrapper}>
            <img className={s.img}  src={props.imageUrl} alt=""/>
        </div>
    );
};

export default PhotosImage;