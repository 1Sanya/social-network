import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Masonry from 'react-masonry-css';
import { fetchPhotos } from '../../../Redux/action-creators/photosAC';
import Photos_image from './Photos_image/Photos_image';
import s from './Photos_list.module.css';
import { useTypedSelector } from '../../../hooks/hooks';

const Photos_list = () => {
  const dispatch = useDispatch();
  const { photos, loading, error } = useTypedSelector((state) => state.photosPage);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  if (loading) {
    return <div>Загружается...</div>;
  }

  if (error) {
    return <div>Ошибка-c</div>;
  }

  return (

    <Masonry
      breakpointCols={3}
      className={s.wrapper}
    >
      {photos.map((n) => <Photos_image imageUrl={n.urls.regular} />)}
    </Masonry>

  );
};

export default Photos_list;
