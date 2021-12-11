import React, {useRef, useState} from 'react';
import classnames from 'classnames';
import { ThemeProvider } from '@mui/material/styles';
import {themeTest} from './theme';
import {
  Button,
} from '@mui/material';
import {MyFuncComponent} from "components/MyFuncComponent";
import {MyClassComponent} from "components/MyClassComponent";
import './style.css';

export const App = (props) => {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([]);

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const updateCount = () => {
    setCount((prevCount) => prevCount + 1);
    setMessages((prevMessages) => [
      ...prevMessages,
      `message ${prevMessages?.length + 1}`
    ])

    if (count % 2) {
      ref1.current.focus()
    } else {
      ref2.current.focus()
    }
  }

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
          <h1 className="caption">
            <a href="https://mui.com/components/" target="_blank">Hello Material-UI!</a>
          </h1>
          <MyFuncComponent
            setMyRef={ref1}
            myTypeName={'func'}
          >
            {count}
          </MyFuncComponent>
          <br/>
          <MyClassComponent
            setMyRef={ref2}
            myTypeName={'class'}
          >
            {count}
          </MyClassComponent>
          <br/>
          <Button
            variant="outlined"
            onClick={updateCount}
          >
            Click!
          </Button>
          <div>
            {messages?.map((item, index) => {
              return (
                <div key={index}>
                  {item}
                </div>
              )
            })}
          </div>
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
