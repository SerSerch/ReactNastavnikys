import React from 'react';
import {MyProvider} from "./MyContext";

// общий Provider, что бы не громоздить это в index
// тут можно оборачивать в множество других context Provider
export const ContextProvider = (props) => {
  return (
    <MyProvider>
      {props.children}
    </MyProvider>
  )
}
