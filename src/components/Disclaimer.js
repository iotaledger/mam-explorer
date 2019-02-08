import React from 'react'
import ReactGA from 'react-ga';
import { withCookies } from 'react-cookie';

class Disclaimer extends React.Component {
  state = { ack: true }

  componentDidMount() {
    const ack = this.props.cookies.get('mam-explorer-cookie');
    if (!ack) {
      document.getElementById('footer').classList.add('cookie-bar-bottom-bar');
      this.setState({ ack: false });
    }
  }

  dismiss = () => {
    this.props.cookies.set('mam-explorer-cookie', true, { path: '/' });
    document.getElementById('footer').classList.remove('cookie-bar-bottom-bar');
    this.setState({ ack: true })
  }

  render() {
    if (this.state.ack) return null;

    return (
      <div className="disclaimer">
        <span className="disclaimer-text">
          This website uses cookies to ensure you get the best experience on our
          website.&nbsp;
          <ReactGA.OutboundLink
            className="disclaimer-link"
            eventLabel="https://www.iota.org/research/privacy-policy"
            to="https://www.iota.org/research/privacy-policy"
          >
          Learn more
          </ReactGA.OutboundLink>
        </span>
        <button className="button" onClick={this.dismiss}>Dismiss</button>
      </div>
    )
  }
}

export default withCookies(Disclaimer)
