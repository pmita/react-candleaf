import React, { useState } from 'react';
// PROP TYPES
import PropTypes from 'prop-types';
// STYLES
import './Input.scss';

function Input({
  type,
  title,
  onChange,
  errorMessage,
  ...inputProps
}) {
  // STATE & VARIABLES
  const [isFocused, setIsFocused] = useState(false);

  // EVENTS
  const handleFocus = () => {
    setIsFocused(true);
  };
  return (
    <label>
      <span>
        {title}
        :
      </span>
      <input
        type={type}
        onChange={onChange}
        onBlur={handleFocus}
        focused={isFocused.toString()}
        {...inputProps}
      />
      <p className="input-error">{errorMessage}</p>
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  title: '',
  onChange: () => {},
  errorMessage: '',
};

export default Input;
