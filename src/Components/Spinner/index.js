import React from 'react';
import './spinner.scss';

const Loader = props => (
  <div className={props.small ? 'small-loader' : 'big-loader'} />
);

export default Loader;
