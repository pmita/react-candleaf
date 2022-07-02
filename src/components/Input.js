import React, { useState } from 'react';
// PROP TYPES
import PropTypes from 'prop-types';
// STYLES
import './Input.scss';

function Input({
  type,
  name,
  label,
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
    <div>
      <label htmlFor={name}>
        <span>
          {label}
          :
        </span>
        <input
          type={type}
          onChange={onChange}
          onBlur={handleFocus}
          focused={isFocused.toString()}
          {...inputProps}
          id={name}
        />
        <p className="input-error">{errorMessage}</p>
      </label>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  name: '',
  onChange: () => {},
  errorMessage: '',
};

export default Input;
