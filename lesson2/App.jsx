import React, {Fragment, useState, useRef} from 'react';
import './style.css';
import {MyFuncComponent} from "components/MyFuncComponent";
import {MyClassComponent} from "components/MyClassComponent";

// обратите внимание! если компонент или переменная экспортируется не по default
// то в import родителя добавляются скобки { App }
export const App = (props) => {
  // props - это объект с данными которые получил этот компонент от родителя
  // в нашем случае получили данные из index.js
  // деструктуризация props (для более удобного использования)
  const {
    name,
  } = props;

  // состояние для каждого компонента свое
  // его можно передать в другой дочерний компонент
  // состояние может хранить любые типы данных, но крайне не рекомендуется хранить функции либо компоненты
  // что бы создать состояние используют хук useState и деструктуризацию полученного массива
  // первый элемент содержит значение состояния, а второй элемент является функцией, которая изменяет это состояние
  // можно передать значение по умолчанию 0 при создании состояния
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([]);

  // создаем ссылку на элемент в DOM дереве
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  // создаем метод компонента
  const updateCount = () => {
    // для изменения состояния можно передать новое значение
    // либо функцию которая получит предыдущее состояние
    // такая запись используется для устранения багов при быстром изменении состояния
    // (к примеру при закликивании кнопки)
    setCount((prevCount) => prevCount + 1);
    setMessages((prevMessages) => [
      ...prevMessages, // берем все предыдущие сообщения
      `message ${prevMessages?.length + 1}` // добавляем новое сообщение
    ])

    // используем фокус через ref
    if (count % 2) {
      ref1.current.focus()
    } else {
      ref2.current.focus()
    }
  }

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
          <MyFuncComponent
            {/* передаем ref через props, что бы внутри компонента привязать его к элементу */}
            {/* самим компонентам нельзя присвоить ref, а их элементам можно */}
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
          <button onClick={updateCount}>Click!</button>
          <div>
            {messages?.map((item, index) => {
              return (
                // обязательно в любом рендере массива нужен key
                <div key={index}>
                  {item}
                </div>
              )
            })}
          </div>
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
