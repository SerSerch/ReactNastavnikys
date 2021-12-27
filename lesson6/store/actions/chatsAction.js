import { v4 as uuid } from 'uuid';
import {
  createChatAction,
} from 'types/chatsTypes';
import {
  createMessagesAction,
} from 'types/messagesTypes';

export const createChat = (name) => (dispatch) => {
  // создаем уникальный id
  const id = uuid();
  const data = {
    name,
  };

  // добавляем чат в store
  dispatch(createChatAction({id, data}));
  // добавляем сообщения в store
  dispatch(createMessagesAction({id}));
};
