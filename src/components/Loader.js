import React from 'react';

export default ({ showLoader }) => (
  <div className={`bouncing-loader ${showLoader ? 'visible' : ''}`}>
    <div />
    <div />
    <div />
  </div>
);
