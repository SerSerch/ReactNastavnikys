import React, {useState, useEffect, useMemo} from 'react';

// функциональный компонет
export const MyFuncComponent = (props) => {
  const {
    setMyRef,
    myTypeName,
    children,
  } = props;

  const [text, setText] = useState(myTypeName);

  useEffect(() => {
    console.log('useEffect didMount, компонент был мотнирован');
    return () => {
      console.log('useEffect willUnmount, компонент будет размонтирован');
    }
  }, [null]);

  useMemo(() => {
    console.log('useMemo, вызывается пеерд рендером');
  }, [text, children])

  useEffect(() => {
    console.log('useEffect didUpdate, компонент был обновлен');
  }, [text, children]);

  const updateText = (event) => {
    setText(event.target.value);
  }

  console.log('func render, компонент отрисовывается')
  return (
    <div>
      <div>
        MyFuncComponent: {text} {children}
      </div>
      <input
        ref={setMyRef}
        value={text}
        onChange={updateText}
      />
    </div>
  )
}