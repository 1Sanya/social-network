import axios from 'axios'
import { Dispatch } from 'redux'
import { PhotosACT, PhotosAT } from '../../Types/PhotosT'

export const fetchPhotos = () => async (dispatch: Dispatch<PhotosACT>) => {
  try {
    dispatch({ type: PhotosAT.FETCH_PHOTOS })
    const response = await axios.get(
      'https://api.unsplash.com/photos/?client_id=vS6AZI4JcBMALc-SUrXs5qM1Fbov8SM-E4hxQDN6Xjc'
    )
    dispatch({
      type: PhotosAT.FETCH_PHOTOS_SUCCESS,
      payload: response.data,
    })
  } catch (e) {
    dispatch({
      type: PhotosAT.FETCH_PHOTOS_ERROR,
      payload: '* какая-то, не работает',
    })
  }
}
