import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

const Signin = ({ onClick, icon, text }) => {
  return (
    <button onClick={onClick}>
      
      <span>{text}</span>
    </button>
  );
};

Signin.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
};

export default Signin;
