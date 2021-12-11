import React, {createContext, useState} from 'react';

export const MyContext = createContext();

export const MyProvider = (props) => {
  const {
    children,
  } = props;

  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([]);

  const updateCount = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const updateMessages = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      `chat${prevMessages?.length + 1}`
    ])
  }

  return (
    <MyContext.Provider value={{
      messages,
      updateMessages,
      count,
      updateCount,
    }}>
      {children}
    </MyContext.Provider>
  )
}
