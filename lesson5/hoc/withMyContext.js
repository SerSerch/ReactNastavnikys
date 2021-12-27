import React, {useContext} from "react";
// импортируем контекст
import {MyContext} from "contexts/MyContext";

// HOC - компонент высшего порядка
export const withMyContext = (Component) => {
  // внутри создаем новый временный компонент
  // который добавляет новые props в полученный Component
  const newComponent = (props) => {
    // можно взять данные из store через хук useSelector.
    // в данном случае берем данные из контекста
    // и прокидываем в компонент
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

  // возвращаем новый компонент с новыми props
  return newComponent
}
