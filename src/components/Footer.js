import React from 'react';
import ReactGA from 'react-ga';
import '../assets/scss/footer.scss';

export default () => (
  <div className="footer">
    © <ReactGA.OutboundLink
      eventLabel="GitHub profile"
      to="https://github.com/sobolev-alexey"
    >
      Alexey Sobolev
    </ReactGA.OutboundLink> for{' '}
    <a href="https://www.iota.org/">IOTA Foundation</a>
  </div>
);
