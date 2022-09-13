import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

if (window.createMfeContainerInLayout) {
  window.createMfeContainerInLayout('catalog-root');
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#catalog-root')
);
