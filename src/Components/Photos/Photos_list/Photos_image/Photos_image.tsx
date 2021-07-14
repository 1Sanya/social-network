import React, {FC, useState} from 'react';
import {PhotosImageT} from "../../../../Types/PhotosT";
import s from './Photos_image.module.css'


const PhotosImage:FC<PhotosImageT> = (props) => {

    const [model, setModel] = useState(false)
    const [tempingSrc, setTempingSrc] = useState('')

    const getImage = (url:any) => {
        setModel(true);
        setTempingSrc(url);

    }
 const unGetImage = () => {
        setModel(false);
        setTempingSrc('');
    }

    return (
        <div className={s.wrapper}>
            <div onClick={() => unGetImage()} className={model? s.modelOpen : s.model}  ><img className={s.bitImg} src={tempingSrc} alt=""/></div>

            <img className={s.img} onClick={() => getImage(props.imageUrl)}  src={props.imageUrl} alt=""/>
        </div>
    );
};

export default PhotosImage;