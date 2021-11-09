import React from 'react';
import ReactGA from 'react-ga';

const Footer = () => (
  <footer className="footer" id="footer">
    ©{' '}
    <ReactGA.OutboundLink eventLabel="GitHub profile" to="https://github.com/sobolev-alexey">
      Alexey Sobolev
    </ReactGA.OutboundLink>{' '}
    for <a href="https://www.iota.org/">IOTA Foundation</a>
  </footer>
);

export default Footer;
