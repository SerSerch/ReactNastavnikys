import React, {Fragment} from 'react';
import './style.css';
import {MyFuncComponent} from "components/MyFuncComponent";
import {MyClassComponent} from "components/MyClassComponent";

// обратите внимание! если класс экспортируется не по default
// то в import родителя добавляются скобки { App }
export const App = (props) => {
  // props - это объект с данными которые получил этот компонент от родителя
  // деструктуризация props (для более удобного использования)
  const {
    name,
  } = props;

  return (
    // любой return который возвращает верстку или компоненты (даже внутри js метода map)
    // обязан иметь всего 1 общий блок-родителя
    // вместо <div> можно использовать <Fragment> (он не будет отображаться на странице)
    <Fragment>
      <div className="wrap-container">
        <main className="main">
          <h1 className="caption">Hello {name}!</h1>
          {/*
          это многострочный комментарий внутри рендера.
          в любой компонент можно передать любые типы данных через props (даже другой компонент)
          */}
          <MyFuncComponent myTypeName={'func'}>
            text
          </MyFuncComponent>
          <MyClassComponent myTypeName={'class'}>
            text
          </MyClassComponent>
        </main>
      </div>
      <footer className="footer">
        <div className="footer__text">
          &copy;&nbsp;ReactNastavnikys 2021
        </div>
      </footer>
    </Fragment>
  )
}
