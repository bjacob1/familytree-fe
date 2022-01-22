import React, { useState, useImperativeHandle } from 'react';
import propTypes from 'prop-types';

const Toggleable = React.forwardRef(({ children }, ref) => {
  const [visible, setVisible] = useState(false);
  const style = { display: visible ? '' : 'none' };
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const show = () => {
    setVisible(true);
  };
  const hide = () => {
    setVisible(false);
  };
  useImperativeHandle(ref, () => ({ toggleVisibility, show, hide }));
  return <div style={style}>{children}</div>;
});

Toggleable.propTypes = {
  children: propTypes.isRequired,
};

export default Toggleable;
