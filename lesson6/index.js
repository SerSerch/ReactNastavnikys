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
      {/* оборачиваем в провайдер хранилища store */}
      <Provider store={store}>
        {/* оборачиваем в общий провайдер контекста */}
        <ContextProvider>
          <App/>
        </ContextProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.querySelector('#web-page')
);
