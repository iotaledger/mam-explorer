import React from 'react';

const Loader = ({ showLoader }) => (
  <div className={`bouncing-loader ${showLoader ? 'visible' : ''}`}>
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
