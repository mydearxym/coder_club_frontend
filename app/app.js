/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';
// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { useScroll } from 'react-router-scroll';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';


/* eslint-disable import/no-unresolved, import/extensions */
// Load the favicon, the manifest.json file and the .htaccess file
import '!file-loader?name=[name].[ext]!./favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';
import 'file-loader?name=[name].[ext]!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

import { makeSelectLocationState } from 'containers/App/selectors';
import App from 'containers/App';
import 'sanitize.css/sanitize.css';

import createRoutes from './routes';

/* import FontFaceObserver from 'fontfaceobserver';*/
import configureStore from './store';

// Import CSS reset and Global Styles
import './global-styles';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
/* import styles from 'containers/App/styles.css';*/
/* const openSansObserver = new FontFaceObserver('Open Sans', {});*/

// When Open Sans is loaded, add a font-family using Open Sans to the body
/* openSansObserver.load().then(() => {*/
  /* document.body.classList.add('fontLoaded');*/
  /* }, () => {*/
  /* document.body.classList.remove('fontLoaded');*/
  /* });*/


// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState, browserHistory);

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: makeSelectLocationState(),
});

// Set up the router, wrapping all Routes in the App component
const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      render={
        // Scroll to top when going to a new page, imitating default browser
        // behaviour
        applyRouterMiddleware(useScroll())
      }
      routes={rootRoute}
    />
  </Provider>,
  document.getElementById('app')
);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
