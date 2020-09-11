import React from 'react';
import ReactDOM from 'react-dom';
import { RMWCProvider } from '@rmwc/provider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <RMWCProvider>
      <App />
    </RMWCProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
