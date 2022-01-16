import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import style from './styles.module.css';


class Menu extends React.Component {

  render() {
    return (
      <div className={style.menu}>
        <div className={`${style.menu_box} ${style.container}`} >
          <h2>My React App</h2>
        </div>
      </div>
    )
  }
};

const text = 'Hello everybody!';

function Message(prop) {

  return (
    <div className={style.msg_container}>
      <h3>{prop}</h3>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>

    <Menu />

    <main className={style.main_center}>
      {Message(text)}
    </main>

  </React.StrictMode>,
  document.getElementById('root')
);