import React, {useContext} from "react";
import {MyContext} from "contexts/MyContext";

// компонент высшего порядка
export const withMyContext = (Component) => {
  const newComponent = (props) => {
    const {
      ...myContext
    } = useContext(MyContext);

    return (
      <Component
        {...props}
        {...myContext}
      />
    )
  }

  return newComponent
}
