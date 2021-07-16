import React from 'react';
import { connect } from 'react-redux';
import Photos from './Photos';
import { AppStateType } from '../../Redux/store';

const mapPropsToState = (state: AppStateType) => ({
  ph: state.photosPage.photos,
});

const mapDispatchToState = () => {

};

const PhotosContainer = connect(mapPropsToState, mapDispatchToState)(Photos);

export default PhotosContainer;
