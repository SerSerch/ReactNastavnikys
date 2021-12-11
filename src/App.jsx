import React from 'react';
import './style.css';

// обратите внимание! если класс экспортируется не по default
// то в import родителя добавляются скобки { App }
export const App = () => {
  return (
    <h1 className="caption">Hello React!</h1>
  )
}
