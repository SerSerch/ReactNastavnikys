import React, { Fragment } from 'react';
import {Link, useParams} from "react-router-dom";

const MessageList = (props) => {
  const {chatId} = useParams();

  return (
    <div>
      <Link to="/">Home</Link>
      <h1 className="caption">{chatId}</h1>
    </div>
  )
}

export default MessageList;