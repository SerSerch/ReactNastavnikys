import React, {useRef, useContext, useEffect} from 'react';
import classnames from 'classnames';
import {
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import {themeTest} from './theme';
import './style.css';
import Home from "pages/Home";
import MessageList from "pages/MessageList";
import {MyContext} from "contexts/MyContext";

export const App = (props) => {

  const {
    count,
  } = useContext(MyContext);

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    if (count % 2) {
      ref1.current?.focus()
    } else {
      ref2.current?.focus()
    }
  }, [count])

  const footerClass = classnames(
    'footer__text',
    {
      'text_red': !!(count % 2),
    }
  );

  return (
    <ThemeProvider theme={themeTest}>
      <div className="wrap-container">
        <main className="main">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home
                  ref1={ref1}
                  ref2={ref2}
                />
              }
            />
            <Route
              path="/chats/:chatId"
              exact
              element={<MessageList/>}
            />
            <Route
              path="*"
              element={<h1>Страница не найдена</h1>}
            />
          </Routes>
        </main>
      </div>
      <footer className="footer">
        <div className={footerClass}>
          &copy;&nbsp;ReactNastavnikys 2021
        </div>
      </footer>
    </ThemeProvider>
  )
}
