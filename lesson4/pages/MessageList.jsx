import React, { Fragment } from 'react';
import {Link, useParams} from "react-router-dom";

const MessageList = (props) => {
  // получаем значение chatId используя хук useParams
  // название этого значения было объявлено в Route (App.js)
  // данное значение можно получить только если url соответствует адресу указанному в Route
  // на любой другой странице будет undefined
  const {chatId} = useParams();

  return (
    <div>
      <Link to="/">Home</Link>
      <h1 className="caption">{chatId}</h1>
    </div>
  )
}

export default MessageList;
