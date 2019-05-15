import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

export default function Photos({ photoList }) {
  const photos = photoList.map((photo, i) => {
    return <li key={i}><Photo photo={photo} /></li>;
  });

  return (
    <ul>
      {photos}
    </ul>
  );
}

Photos.propTypes = {
  photoList: PropTypes.array.isRequired
};
