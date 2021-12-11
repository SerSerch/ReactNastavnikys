import React, {StrictMode} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { App } from './App';
import { ContextProvider } from "./contexts";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDom.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ContextProvider>
          <App/>
        </ContextProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.querySelector('#web-page')
);
