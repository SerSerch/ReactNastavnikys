import React from 'react';

// функциональный компонет
export const MyFuncComponent = (props) => {
  const {
    myTypeName,
    children,
  } = props;

  return (
    <div>
      MyFuncComponent: {myTypeName} {children}
    </div>
  )
}