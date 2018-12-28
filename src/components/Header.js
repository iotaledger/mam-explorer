import React from 'react';
import 'assets/scss/header.scss';
import Logo from 'assets/images/logo.svg';

export default ({ qrcode }) => (
  <div className="header">
    <Logo />
    <span>MAM Explorer</span>
    { qrcode ? <div className="qr"><img alt="QR code" src={qrcode} /></div> : null}
  </div>
);
