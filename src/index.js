import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
<<<<<<< HEAD
import { Elements } from '@stripe/react-stripe-js';

import App from './App';
import { store, persistor } from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils';
=======

import App from './App';
import { store, persistor } from './store/store';
>>>>>>> 6d935f97ce22422aa0aa5a51ebc05ea05351c844

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}> 
        <BrowserRouter>
<<<<<<< HEAD
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
=======
          <App />
>>>>>>> 6d935f97ce22422aa0aa5a51ebc05ea05351c844
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);
