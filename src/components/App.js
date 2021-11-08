import React, { Component } from 'react';
import ReactGA from 'react-ga';
import queryString from 'query-string';
import QRCode from 'qrcode';
import { fetch } from '../utils/MAM';
import List from './List';
import Loader from './Loader';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Disclaimer from './Disclaimer';

class App extends Component {
  state = {
    messages: [],
    showLoader: false,
    qrcode: null
  };

  componentDidMount = () => {
    if (window.location.search) {
      this.onSubmit(queryString.parse(window.location.search));
    }
  };

  generateQR = async (root, provider, mode, key = null) => {
    try {
      let url = `${window.location.origin}/?provider=${provider}&mode=${mode}&root=${root}`;
      url = key ? `${url}&key=${key}` : url;
      return await QRCode.toDataURL(url);
    } catch (err) {
      console.error(err);
    }
  };

  onSubmit = async ({ provider, root, mode, key }) => {
    if (this.state.showLoader) return;
    const qrcode = await this.generateQR(root, provider, mode, key);
    this.setState({ showLoader: true, messages: [], qrcode });
    ReactGA.event({
      category: 'Fetch',
      action: 'MAM Fetch',
      label: `Provider ${provider}, mode: ${mode}`
    });
    const message = await fetch(provider, root, mode, key);
    this.setState({ messages: [...this.state.messages, message] });
    this.setState({ showLoader: false });
  };

  render() {
    const { messages, showLoader, qrcode } = this.state;
    return (
      <div className="app">
        <Header qrcode={qrcode} />
        <div className="content">
          <Form onSubmit={this.onSubmit} showLoader={showLoader} />
          <div className={`loaderWrapper ${showLoader ? '' : 'hidden'}`}>
            <Loader showLoader={showLoader} />
          </div>
          {messages.length > 0 ? <List messages={messages} /> : null}
        </div>
        <Disclaimer />
        <Footer />
      </div>
    );
  }
}

export default App;
