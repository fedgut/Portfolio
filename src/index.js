import React from 'react';
import ReactDOM from 'react-dom';
import { RMWCProvider } from '@rmwc/provider';
import App from './App';

ReactDOM.render(
  <RMWCProvider>
    <App />
  </RMWCProvider>,
  document.body,
);
