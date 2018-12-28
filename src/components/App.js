import React, { Component } from 'react';
import queryString from 'query-string';
import QRCode from 'qrcode';
import { fetch } from '../utils/MAM';
import List from './List';
import Loader from './Loader';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';

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

  appendToMessages = message => this.setState({ messages: [...this.state.messages, message] });

  fetchComplete = () => this.setState({ showLoader: false });

  generateQR = async (root, provider, mode, key = null) => {
    try {
      let url = `${window.location.origin}/?provider=${provider}&mode=${mode}&root=${root}`;
      url = key ? `${url}&key=${key}` : url;
      return await QRCode.toDataURL(url);
    } catch (err) {
      console.error(err);
    }
  }

  onSubmit = async ({ provider, root, mode, key }) => {
    if (this.state.showLoader) return;
    const qrcode = await this.generateQR(root, provider, mode, key);
    this.setState({ showLoader: true, messages: [], qrcode });
    fetch(provider, root, mode, key, this.appendToMessages, this.fetchComplete);
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
        <Footer />
      </div>
    );
  }
}

export default App;
