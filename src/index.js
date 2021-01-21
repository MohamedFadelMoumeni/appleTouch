import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorkerRegistration.register();
reportWebVitals();
