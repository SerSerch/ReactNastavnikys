import React, { Fragment } from 'react'
import {Button} from "@mui/material";
import {MyFuncComponent} from "components/MyFuncComponent";
import {MyClassComponent} from "components/MyClassComponent";
import {Link} from "react-router-dom";

const Home = (props) => {
  const {
    ref1,
    ref2,
    count,
    updateCount,
    chats,
  } = props;

  return (
    <Fragment>
      <h1 className="caption">
        <a href="https://mui.com/components/" target="_blank">Hello Material-UI!</a>
      </h1>
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
        onClick={updateCount}
      >
        Click!
      </Button>
      <ul>
        {chats?.map((item, index) => {
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

export default Home;
