import React, {createContext, useState} from 'react';

// создаем контекст
export const MyContext = createContext();

// создаем провайдер данного контекста
export const MyProvider = (props) => {
  const {
    children,
  } = props;

  const [count, setCount] = useState(0);
  const [chats, setChats] = useState([]);

  const updateCount = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const updateChats = () => {
    setChats((prevChats) => [
      ...prevChats,
      `chat${prevChats?.length + 1}`
    ])
  }

  // в value может быть передан любой тип данных
  // затем в любом компоненте, который обернут в этот Provider
  // можно будет получить данные через хук useContext
  return (
    <MyContext.Provider value={{
      chats,
      updateChats,
      count,
      updateCount,
    }}>
      {children}
    </MyContext.Provider>
  )
}
