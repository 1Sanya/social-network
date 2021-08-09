import React, { FC } from 'react'
import Photos_album_name from './PhotosName/PhotosName'
import Photos_tabs from './PhotosTabs/Photos_tabs'
import PhotosList from './PhotosList/PhotosList'

const Photos: FC = () => (
  <div>
    <Photos_album_name />
    <Photos_tabs />
    <PhotosList />
  </div>
)

export default Photos
