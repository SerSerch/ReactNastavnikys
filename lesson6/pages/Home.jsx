import React, { Fragment, useState } from 'react';
// для удобного подключения множества HOC и не только
import {compose} from "redux";
import {useSelector, useDispatch} from "react-redux";
import {Button, TextField} from "@mui/material";
import {MyFuncComponent} from "components/MyFuncComponent";
import {MyClassComponent} from "components/MyClassComponent";
import {Link} from "react-router-dom";
// импортируем HOC
import {withMyContext} from "hoc/withMyContext";
// импортируем нужные action
import {
  getUser,
  getUserTest,
  getUserTestAction,
} from "actions/usersAction";
import {
  createChat,
} from "actions/chatsAction";

const Home = (props) => {
  const {
    ref1,
    ref2,
    // эти пропсы получены из HOC withMyContext
    count,
    updateCount,
  } = props;

  const [chatName, setChatName] = useState('');

  // получаем свойства из хранилища store через хук useSelector
  // в хук можно передать функцию, которая упростит деструктуриизацию
  // user это название из reducers/index.js
  const {
    isLogined,
    name,
  } = useSelector((myStore) => myStore.user);
  // через деструктуризацию можно присвоить новые названия свойств
  const {
    isLogined: isLoginedTest,
    name: nameTest,
  } = useSelector((myStore) => myStore.test);
  const dispatch = useDispatch();

  const chats = useSelector((myStore) => myStore.chats);

  const onButtonClick = () => {
    updateCount();
  }

  const onButtonGetUser = () => {
    // вызываем getUser из actions/usersAction
    // получаем рандомного пользователя с id 0 или 1
    const id = Math.round(Math.random());
    dispatch(getUser(id));
    // dispatch(getUserTest(id));
    dispatch(getUserTestAction({
      "id": "3",
      "name": "Super User"
    }))
  }

  const updateChatName = (event) => {
    setChatName(event.target.value);
  }

  const addChat = () => {
    dispatch(createChat(chatName || 'DefaultName'))
    setChatName('');
  }

  return (
    <Fragment>
      <h1 className="caption">
        {isLogined
          ? `Hello ${name}!`
          : 'will login please'
        }
      </h1>
      <h1 className="caption">
        {isLoginedTest
          ? `Hello ${nameTest}!`
          : 'will login please'
        }
      </h1>

      <Button
        variant="outlined"
        onClick={onButtonGetUser}
      >
        Get user
      </Button>

      <MyFuncComponent
        setMyRef={ref1}
        myTypeName={'func'}
      >
        {count}
      </MyFuncComponent>
      <br/>
      <MyClassComponent
        setMyRef={ref2}
        myTypeName={'class'}
      >
        {count}
      </MyClassComponent>
      <br/>
      <Button
        variant="outlined"
        onClick={onButtonClick}
      >
        Click!
      </Button>
      <br/>
      <br/>
      <TextField
        variant="outlined"
        value={chatName}
        onChange={updateChatName}
      />
      <br/>
      <Button
        variant="contained"
        color="info"
        onClick={addChat}
      >
        Add new chat
      </Button>
      <ul>
        {Object.entries(chats)?.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/chats/${item[0]}`}>
                {`${item[1]?.name}`}
              </Link>
            </li>
          )
        })}
      </ul>
    </Fragment>
  )
}

// для классовых компонентов или страниц
// достаем данные из store, которые будут переданы в props
// const mapStateToProps = ({user}) => ({
//   isLogined: user.isLogined,
//   name: user.name,
// });
// подключаем все используемые action, которые будут переданы в props
// const mapActionsToProps = {
//   getUser,
//   getUserTest,
//   getUserTestAction,
// };

// оборачиваем страницу в HOC withMyContext и экспортируем
export default compose(
  withMyContext,
  // так же тут удобно подключать connect для классовых компонентов или страниц
  // connect(mapStateToProps, mapActionsToProps)
)(Home);
