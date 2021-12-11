import React, {StrictMode} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { App } from './App';

ReactDom.render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,
  document.querySelector('#web-page')
);
