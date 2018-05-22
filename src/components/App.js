import React, { Component } from 'react';
import queryString from 'query-string';
import { fetch } from '../utils/MAM';
import List from './List';
import Loader from './Loader';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import 'assets/scss/app.scss';

class App extends Component {
  state = {
    messages: [],
    showLoader: false,
  };

  componentDidMount = () => {
    if (location.search) {
      this.onSubmit(queryString.parse(location.search));
    }
  };

  appendToMessages = message => this.setState({ messages: [...this.state.messages, message] });

  fetchComplete = () => this.setState({ showLoader: false });

  onSubmit = ({ provider, root, mode, key }) => {
    if (this.state.showLoader) return;
    this.setState({ showLoader: true, messages: [] });
    fetch(provider, root, mode, key, this.appendToMessages, this.fetchComplete);
  };

  render() {
    const { messages, showLoader } = this.state;
    return (
      <div className="app">
        <Header />
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
