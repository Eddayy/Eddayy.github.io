import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

const Signin = ({ onClick, icon, text }) => {
  return (
    <div onClick={onClick}>
      {icon && cloneElement(icon)}
      <span>{text}</span>
    </div>
  );
};

Signin.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
};

export default Signin;
