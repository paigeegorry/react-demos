import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import './PhotoAlbum.css';

export default function PhotoAlbum({ photos }) {
  return (
    <Photos photoList={photos} />
  );
}

PhotoAlbum.propTypes = {
  photos: PropTypes.array.isRequired
};
