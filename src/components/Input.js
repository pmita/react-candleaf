import React, { useState } from 'react';
// PROP TYPES
import PropTypes from 'prop-types';
// STYLES
import './Input.scss';

function Input({
  type,
  name,
  onChange,
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
        {name}
        :
      </span>
      <input
        type={type}
        onChange={onChange}
        onBlur={handleFocus}
        focused={isFocused.toString()}
        {...inputProps}
      />
      <p className="input-error">{inputProps.errorMessage}</p>
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  onChange: () => {},
};

export default Input;
