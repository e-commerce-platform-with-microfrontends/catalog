import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

window.mountCatalogMfe = (el) => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    el
  )
}
