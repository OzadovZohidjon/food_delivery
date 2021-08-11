import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import data from './data';

ReactDOM.render(
  <BrowserRouter>
    <App data={data} />
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
