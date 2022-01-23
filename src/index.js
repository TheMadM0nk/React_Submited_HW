import React, { useState, useEffect } from 'react';
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



const App = () => {

  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState('');

  const myRef = React.createRef();

  useEffect(() => {
    myRef.current?.focus();
  }, [myRef]);

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    let timerId = null;

    if (messageList.length && lastMessage?.author !== "Bot:") {
      timerId = setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "Bot:", message: "Message recived!", style: 'botStyle' },
        ]);
      }, 1500);
    }

    return () => clearInterval(timerId);
  }, [messageList]);

  const Clock = () => {
    const [time, setTime] = useState(new Date());

    const refreshClock = () => {
      setTime(new Date());
    }
    useEffect(() => {
      const timer = setInterval(refreshClock, 1000);
      return () => clearInterval(timer);
    }, [time]);

    return (
      <span className={style.clock}>
        Current Time is {time.toLocaleTimeString('Ru-ru')}
      </span>
    );
  }

  const sendMsg = () => {
    if (message) {
      setMessageList([...messageList, { author: 'User:', message: myRef.current.value }]);
      setMessage('');
    }
  };

  const handlePressInput = (event) => {
    if (event.code === "Enter") {
      sendMsg();
    }
  };

  return (

    <main className={style.main_center}>
      <div className={style.msgField}>
        {messageList.map((msg, index) => (
          <div className={`${style.msg_container} ${msg.style}`} key={index}>
            <h5>{msg.author}&nbsp;</h5>
            <p>{msg.message}</p>
          </div>))}
      </div>

      <div className={style.inputForm}>
        <input ref={myRef} value={message} onKeyPress={handlePressInput} onChange={(event) => setMessage(event.target.value)} className={style.textInput} />
        <div className={style.inputForm_btnBox}>
          <Clock />
          <button className={style.btn} onClick={sendMsg}>Send</button>
        </div>
      </div>
    </main>
  );
}


ReactDOM.render(
  <React.StrictMode>

    <Menu />
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);