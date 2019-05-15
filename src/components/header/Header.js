import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
