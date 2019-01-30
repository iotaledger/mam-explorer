import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import WebFontLoader from 'webfontloader';
import './assets/scss/app.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { trackingID } from './config.json';

WebFontLoader.load({
  google: {
    families: ['Nunito Sans:300,400,600,700', 'Material Icons'],
  },
});

ReactGA.initialize(trackingID); // (trackingID, { debug: true })
ReactGA.set({ anonymizeIp: true });

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
