// @flow
import React from 'react';
import './spinner.scss';

type Props = {
  small: boolean
};

const Loader = (props: Props) => (
  <div className={props.small ? 'small-loader' : 'big-loader'} />
);

export default Loader;
