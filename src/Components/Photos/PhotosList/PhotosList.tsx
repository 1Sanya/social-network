import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Masonry from 'react-masonry-css'
import { fetchPhotos } from '../../../Redux/action-creators/PhotosAC'
import s from './PhotosList.module.css'
import { useTypedSelector } from '../../../hooks/hooks'
import PhotosImage from './PhotosListItem/PhotosListImage'

const PhotosList = () => {
  const dispatch = useDispatch()
  const { photos, loading, error } = useTypedSelector(
    (state) => state.photosPage
  )

  useEffect(() => {
    dispatch(fetchPhotos())
  }, [])

  if (loading) {
    return <div>Загружается...</div>
  }

  if (error) {
    return <div>Ошибка-c</div>
  }

  return (
    <Masonry breakpointCols={3} className={s.wrapper}>
      {photos.map((n) => (
        <PhotosImage key={n} imageUrl={n.urls.small} />
      ))}
    </Masonry>
  )
}

export default PhotosList
