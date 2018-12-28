import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader';
import './assets/scss/app.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

WebFontLoader.load({
  google: {
    families: ['Nunito Sans:300,400,600,700', 'Material Icons'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
