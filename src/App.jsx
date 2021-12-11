import React, {Fragment} from 'react';
import './style.css';

//обратите внимание! если класс экспортируется не по default
//то в import родителя добавляются скобки { App }
export const App = () => {
  return (
    <Fragment>
      <div className="wrap-container">
        <main className="main">
          <h1 className="caption">Hello React!</h1>
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
