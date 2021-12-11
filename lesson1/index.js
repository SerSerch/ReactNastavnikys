import React, {StrictMode} from 'react';
import ReactDom from 'react-dom';
import { App } from './App';

ReactDom.render(
  <StrictMode>
    <App name={'React'}/>
  </StrictMode>,
  // указываем куда будет вставляться React приложение на странице
  document.querySelector('#web-page')
);
