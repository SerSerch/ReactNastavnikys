import React, { Fragment } from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const MessageList = (props) => {
  const {chatId} = useParams();
  const chats = useSelector((myStore) => myStore.chats);
  const messages = useSelector((myStore) => myStore.messages);
  const activeChat = chats[chatId];
  const activeMessageList = messages[chatId];

  return (
    <div>
      <Link to="/">Home</Link>
      <h1 className="caption">{activeChat?.name}</h1>
      <ul>
        {activeMessageList?.map((item, index) => (
          <li key={`message-${chatId}-${index}`}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MessageList;
