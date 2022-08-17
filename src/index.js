import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

window.createMfeContainerInLayout('catalog-root');

ReactDOM.render(
  <BrowserRouter>
    <div className='container'>
      <App />
    </div>
  </BrowserRouter>,
  document.querySelector('#catalog-root')
);
