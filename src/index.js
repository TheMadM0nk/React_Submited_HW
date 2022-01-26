import React from 'react';
import ReactDOM from 'react-dom';
import style from './styles.module.css';
import { Messanger, ChatList } from './components';

const App = () => {

  class Banner extends React.Component {

    render() {
      return (
        <div className={style.banner}>
          <div className={`${style.banner_box} ${style.container}`} >
            <h2>My React App</h2>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      <Banner />
      <div className={style.appContainer}>
        <ChatList />
        <Messanger />
      </div>
    </div>

  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);