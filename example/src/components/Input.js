import React, { Fragment } from 'react';

const Input = React.forwardRef(({ value, onChange, label }, ref) => (
  <Fragment>
    <input
      aria-label={label}
      type="text"
      ref={ref}
      value={value}
      onChange={onChange}
      style={{ fontSize: '1.5rem', border: '1px solid black' }}
    />
  </Fragment>
));

export default Input;
