import React from 'react';
import logo from '../assets/images/logo.svg';

export default ({ qrcode }) => (
  <div className="header">
    <img alt="logo" className="logo" src={logo} />
    <span>MAM Explorer</span>
    { qrcode ? <div className="qr"><img alt="QR code" src={qrcode} /></div> : null}
  </div>
);
