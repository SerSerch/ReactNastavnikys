import React, { Fragment } from 'react';
import {compose} from "redux";
import {useSelector, useDispatch} from "react-redux";
import {Button} from "@mui/material";
import {MyFuncComponent} from "components/MyFuncComponent";
import {MyClassComponent} from "components/MyClassComponent";
import {Link} from "react-router-dom";
import {withMyContext} from "hoc/withMessages";
import {getUser} from "actions/usersAction";

const Home = (props) => {
  const {
    ref1,
    ref2,
    count,
    updateCount,
    messages,
    updateMessages,
  } = props;

  const { isLogined, name } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    updateCount();
    updateMessages();
  }

  const onButtonGetUser = () => {
    // получаем рандомного пользователя с id 0 или 1
    dispatch(getUser(Math.round(Math.random())))
  }

  return (
    <Fragment>
      <h1 className="caption">
        Hello {name}!
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
      <ul>
        {messages?.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/chats/${item}`}>
                {item}
              </Link>
            </li>
          )
        })}
      </ul>
    </Fragment>
  )
}

export default compose(
  withMyContext,
)(Home);