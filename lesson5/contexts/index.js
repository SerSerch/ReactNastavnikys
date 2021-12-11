import React from 'react';
import {MyProvider} from "./MyContext";

// общий provider, что бы не громоздить в index
export const ContextProvider = (props) => {
  return (
    <MyProvider>
      {props.children}
    </MyProvider>
  )
}